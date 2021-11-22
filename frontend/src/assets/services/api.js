import axios from "axios";
import jwt from "jsonwebtoken";
import { Logger } from "./Logger";

const DADOS_LOGIN = "dados_login_msd";
const TOKEN_REFRESH = "token_refresh_msd";
const TOKEN_KEY = "token_key_msd";
const TOKEN_KEY_CAT = "token_key_catalogo";

export const apiMsd = axios.create({
  baseURL: "https://server.omnion.com.br:10023/Api/",
  //baseURL: "http://69.61.29.27:10023/Api/"
});

export const apiUpImg = axios.create({
  baseURL: "https://server.omnion.com.br:10023/Api/",
  //baseURL: "http://69.61.29.27:10023/Api/"
});

export const apiLogIn = axios.create({
  baseURL: "https://server.omnion.com.br:10023/Api/",
  //baseURL: "http://69.61.29.27:10023/Api/"
});

export const apiAcao = axios.create({
  baseURL: "http://69.61.29.28:8092/Acao/Api/",
});

export const apiCat = axios.create({
  baseURL: "https://server.omnion.com.br:10001/Api/",
});

export const apiCep = axios.create({
  baseURL: "http://viacep.com.br/ws/",
});

apiMsd.interceptors.request.use(async (config) => {
  if (localStorage.getItem(TOKEN_REFRESH) === "true") {
    var token = localStorage.getItem(TOKEN_KEY);
    const decoded = jwt.decode(token, { complete: true });
    if (decoded !== null) {
      var dataDecodada = decoded.payload.exp * 1000;
      var dataSeg = new Date(dataDecodada - 150000);
      var dataExpirado = dataSeg.getTime();

      var dataSeg2 = new Date();
      var dataAgora = dataSeg2.getTime();
      if (dataAgora > dataExpirado) {
        localStorage.setItem(TOKEN_REFRESH, "false");
        var dadosToken = JSON.parse(localStorage.getItem(DADOS_LOGIN));
        const defaultOptions = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        var dados = {
          token: dadosToken.refresh_token,
          clientId: "MsdClient",
          clientSecret: "441286!7-c617-4FB9-9206-2DEBCF313F30",
          Grant_Type: "refresh_token",
        };

        var retorno = await apiLogIn.post(
          "Account/Refresh",
          JSON.stringify(dados),
          defaultOptions
        );
        if (retorno.data.sucesso) {
          token = retorno.data.result.access_token;
          const decoded = jwt.decode(retorno.data.result.access_token, {
            complete: true,
          });
          retorno.data.result.FullName = decoded.payload.FullName;
          await localStorage.setItem(TOKEN_KEY, token);
          await localStorage.setItem(
            DADOS_LOGIN,
            JSON.stringify(retorno.data.result)
          );
          localStorage.setItem(TOKEN_REFRESH, "true");

          dataSeg = new Date(dataDecodada - 100000);
          dataExpirado = dataSeg.getTime();
          if (dataAgora > dataExpirado) {
            window.location = window.location.href;
          }
        } else {
          window.location = "/Logout";
        }
      }
    }
    config = await Logger(config);
    config.headers.common["Authorization"] = `bearer ${token}`;
    config.headers.common["Content-Type"] = `application/json`;
    return config;
  } else {
    setTimeout(() => ResetaCache(), 5000);
    return false;
  }
});

const ResetaCache = () => {
  if (localStorage.getItem(TOKEN_REFRESH) === "true") {
  } else {
    localStorage.setItem(TOKEN_REFRESH, "true");
    window.location = window.location.href;
  }
};

apiMsd.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return error.response;
  }
);

apiLogIn.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return error.response;
  }
);

apiCat.interceptors.request.use(async (config) => {
  var token = localStorage.getItem(TOKEN_KEY_CAT);
  if (
    token !== "undefined" &&
    token !== undefined &&
    token !== null &&
    token !== ""
  ) {
    config.headers.common["Authorization"] = `bearer ${token}`;
  }
  config.headers.common["Content-Type"] = `application/json`;
  return config;
});

apiCat.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return error.response;
  }
);

apiCep.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return error.response;
  }
);
