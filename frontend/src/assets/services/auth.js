import { apiLogIn, apiMsd, apiCat } from "./api";
import jwt from "jsonwebtoken";

export const TOKEN_KEY = "token_key_msd";
export const TOKEN_KEY_CAT = "token_key_catalogo";
export const DADOS_LOGIN = "dados_login_msd";
export const DADOS_LOGIN_CAT = "dados_login_catalogo";
export const TOKEN_REFRESH = "token_refresh_msd";
export const DADOS = "dados_msd";
export const CLIENTE_KEY = "cliente_key_msd";
export const CLIENTE_DOC = "cliente_cod_msd";
export const CLIENTE_PROF = "cliente_prof_msd";

export const isAuthenticated = () => {
  if (getToken() !== null) {
    const decoded = jwt.decode(getToken(), { complete: true });
    if (decoded !== null) {
      if (getRefresh() === "true") {
        const dadosToken = getDados();
        if (dadosToken !== null) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export const getRefresh = () => localStorage.getItem(TOKEN_REFRESH);

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const set_Login = (token) => {
  localStorage.setItem(TOKEN_REFRESH, "true");
  localStorage.setItem(TOKEN_KEY, token);
};

export const getDados = () => JSON.parse(localStorage.getItem(DADOS_LOGIN));
export const set_Dados = (dados) => {
  localStorage.setItem(DADOS_LOGIN, JSON.stringify(dados));
};

export const getTokenCAT = () => localStorage.getItem(TOKEN_KEY_CAT);
export const set_LoginCAT = (token) => {
  localStorage.setItem(TOKEN_KEY_CAT, token);
};

export const getrefreshCat = () => localStorage.getItem(DADOS_LOGIN_CAT);
export const set_refreshCAT = (dados) => {
  localStorage.setItem(DADOS_LOGIN_CAT, dados);
};

export const DeleteTokenCat = () => {
  localStorage.removeItem(DADOS_LOGIN_CAT);
  localStorage.removeItem(TOKEN_KEY_CAT);
};

export const getCliente = () => localStorage.getItem(CLIENTE_KEY);
export const set_Cliente = (idCliente) => {
  localStorage.setItem(CLIENTE_KEY, idCliente);
};

export const getDocCliente = () => localStorage.getItem(CLIENTE_DOC);
export const set_DocCliente = (DocCliente) => {
  localStorage.setItem(CLIENTE_DOC, DocCliente);
};

export const getProfCliente = () => localStorage.getItem(CLIENTE_PROF);
export const set_ProfCliente = (ProfCliente) => {
  localStorage.setItem(CLIENTE_PROF, ProfCliente);
};

export const logout = (redirection) => {
  const response = [
    localStorage.removeItem("token_key_msd"),
    localStorage.removeItem("dados_login_msd"),
    localStorage.removeItem("dados_pet"),
    localStorage.removeItem("token_refresh_msd"),
    localStorage.removeItem("cliente_key_msd"),
    localStorage.removeItem("cliente_cod_msd"),
    localStorage.removeItem("cliente_prof_msd"),
    localStorage.removeItem("token_key_catalogo"),
    localStorage.removeItem("dados_login_catalogo"),
  ];

  return redirection && response;
};

export const autenticaLogon = (dados) => {
  localStorage.setItem(TOKEN_REFRESH, "true");
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-cache",
    },
  };
  dados = {
    ...dados,
    clientId: "MsdClient",
    clientSecret: "441286!7-c617-4FB9-9206-2DEBCF313F30",
    scope: "apiomnion apicatalogo apimsd offline_access",
  };
  return apiLogIn.post("GenLogin/Login", JSON.stringify(dados), defaultOptions);
};

export const autenticaLogonCat = (dados) => {
  localStorage.setItem(TOKEN_REFRESH, "true");
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-cache",
    },
  };

  dados = {
    ...dados,
    clientId: "CatalogoSite",
    clientSecret: "52748A19-CA94-48EE-8A9A-0D5DB4459A8Bf!",
    scope: "apiomnion apicatalogo offline_access",
  };

  return apiLogIn.post("GenLogin/Login", JSON.stringify(dados), defaultOptions);
};

export const RefresToken = async (dados) => {
  const decoded = jwt.decode(getToken(), { complete: true });
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  dados = {
    ...dados,
    clientId: "MsdClient",
    clientSecret: "441286!7-c617-4FB9-9206-2DEBCF313F30",
    Grant_Type: "refresh_token",
  };

  const retorno = await apiLogIn.post(
    "Account/Refresh",
    JSON.stringify(dados),
    defaultOptions
  );
  //console.log(retorno);
  set_Login(retorno.data.result.access_token);

  const decoded2 = jwt.decode(retorno.data.result.access_token, {
    complete: true,
  });

  if (decoded2 !== "" && decoded2 != null && decoded2 !== undefined) {
    const Name = decoded2.payload.FullName.split(" ");
    set_Cliente(Name[0]);

    retorno.data.result.FullName = decoded2.payload.FullName;

    set_Dados(retorno.data.result);
  }

  set_Dados(retorno.data.result);
  localStorage.setItem(TOKEN_REFRESH, "true");

  if (retorno.data.sucesso !== true) {
    window.location.href = "/";
  } else {
    if (decoded !== null) {
      const dataSeg = new Date(decoded.payload.exp * 1000 - 100000);
      const dataExpirado = dataSeg.getTime();

      const dataSeg2 = new Date();
      const dataAgora = dataSeg2.getTime();
      if (dataAgora > dataExpirado && getRefresh()) {
        return window.location.href;
      }
    }
  }
};

export const PostApiProdutos = (URL, dados) => {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-cache",
    },
  };
  return apiCat.post(URL, JSON.stringify(dados), defaultOptions);
};

export const GetApiProdutos = (URL = "", dados) => {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-cache",
    },
  };
  return apiCat.get(URL, defaultOptions, JSON.stringify(dados));
};

//////////////////////////////////////////

export const PostApi = (URL, dados) => {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-cache",
    },
  };
  return apiMsd.post(URL, JSON.stringify(dados), defaultOptions);
};

export const PostApiImage = (URL, dados) => {
  const defaultOptions = {
    headers: {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-cache",
    },
  };
  return apiMsd.post(URL, dados, defaultOptions);
};

export const PostApiCat = (URL, dados) => {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-cache",
    },
  };
  return apiCat.post(URL, JSON.stringify(dados), defaultOptions);
};

export const PostApi2 = (URL, dados) => {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-cache",
    },
  };
  apiMsd.post(URL, JSON.stringify(dados), defaultOptions);
};

export const GetApi = (URL) => {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-cache",
    },
  };
  return apiMsd.get(URL, defaultOptions);
};

export const PostApiOut = (URL = "", dados, token = "") => {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-cache",
    },
    Authorization: "",
  };

  if (token !== "") {
    defaultOptions.Authorization = `bearer ${token}`;
  }

  return apiLogIn.post(URL, JSON.stringify(dados), defaultOptions);
};

export const PostApiOut2 = (URL, dados) => {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-cache",
    },
  };

  return apiLogIn.post(URL, JSON.stringify(dados), defaultOptions);
};

export const GetApiOut = (URL) => {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-cache",
    },
  };
  return apiLogIn.get(URL, defaultOptions);
};
