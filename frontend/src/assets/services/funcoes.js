//import { isAuthenticated } from "./services/auth";
import ReactDOM from "react-dom";

import { GetApi, PostApi } from "./auth";

const idProjeto = 2335244;

export async function DeletaCarrinho() {
  var meta = await JSON.parse(localStorage.getItem("meta_carrinho"));
  var res = await GetApi("Carrinho/ExcluiCarrinho/" + meta.idCarrinho);
  if (res.data.sucesso) {
    localStorage.removeItem("meta_carrinho");
  }
}

export async function SalvaCarrinho(carrinho) {
  //console.log(carrinho);
  MudaVisibilidade("LoadingPage");
  var dadosCliente = await GetApi("Cliente/ListarClienteDoc/");
  if (dadosCliente.data.sucesso) {
    var itens = [];

    await carrinho.forEach((car) => {
      // console.log(car);
      itens.push({
        codigo: car.id === undefined ? car.produtoId : car.id,
        quantidade: car.quantidade === undefined ? car.qtd : car.quantidade,
        fornecedor:
          car.fornecedor.id === undefined ? car.fornecedor : car.fornecedor.id,
      });
    });

    ///console.log(itens);

    const dados = {
      idProjeto: idProjeto,
      idEndereco: dadosCliente.data.idEndereco,
      ativo: true,
      carrinhoItems: itens,
    };
    var resultados = await PostApi("Carrinho/SalvaCarrinho/", dados);
    if (!resultados.data.sucesso) {
      MudaVisibilidade("LoadingPage");
      alert("Erro:" + resultados.data.mensagem);
      return false;
    } else {
      MudaVisibilidade("LoadingPage");
      return true;
    }
  }
}

export async function CarregaCarrinho() {
  var resposta = await GetApi("Carrinho/RecuperaCarrinho");
  //console.log(resposta);
  if (resposta.data.sucesso) {
    var produtos = [];

    await resposta.data.itens.forEach((itn, i) => {
      produtos.push(itn.produto);
      produtos[i]["qtd"] = itn.quantidade;
    });
    return produtos;
  } else {
    alert("Erro: " + resposta.data.mensagem);
    return -1;
  }
}

export var floaterFill = async () => {
  document.body.classList.add("overnot");
  document.body.classList.remove("overyea");
  var floaterStado = "floaterBlock";
  return floaterStado;
};

export var floaterFechar = async () => {
  document.body.classList.add("overyea");
  document.body.classList.remove("overnot");
  var floaterStado = "floaterNone";
  return floaterStado;
};

export var alternaClasse = async (id, classe) => {
  var e = document.getElementById(id);
  if (e) {
    if (e.classList.contains(classe)) {
      e.classList.remove(classe);
      return true; //Classe existia
    } else {
      e.classList.add(classe);
      return false; //Classe não existia
    }
  } else {
    return -1;
  }
};

export var MenuComp = async (displayAcessoMenu) => {
  if (!displayAcessoMenu) {
    return {
      displayAcessoMenu: true,
      pageContent: "page-content",
    };
  } else {
    return {
      displayAcessoMenu: false,
      pageContent: "page-content content_total",
    };
  }
};

export var dateAdjustment = (d, h) => {
  if (d) {
    var fragmented = d.split("T");
    var date = fragmented[0].split("-");
    date = date.reverse().join("/");
    if (!h) {
      return date;
    }
    date = date + " - " + fragmented[1].replace(/(:\d*$)|(:\d*\.\d*$)/g, "");
    return date;
  } else {
    return -1;
  }
};

export var trocaAbas = async (aba) => {
  var x = document.getElementsByClassName("visitado");
  x[0].classList.remove("visitado");

  x = document.getElementById("aba_" + aba);
  x.classList.add("visitado");

  x = document.getElementsByClassName("visivel");
  x[0].classList.remove("visivel");

  x = document.getElementById("aba" + aba);
  x.classList.add("visivel");
};

export const MudaVisibilidade = async (id, barra = true) => {
  if (id) {
    var x = document.getElementById(id);
    if (!x) {
      return -1;
    }

    if (window.getComputedStyle(x).getPropertyValue("display") === "none") {
      ReactDOM.findDOMNode(x).style.setProperty("display", "block");
      if (barra) {
        document.body.classList.remove("overyea");
        document.body.classList.add("overnot");
      }
      return true;
    } else {
      ReactDOM.findDOMNode(x).style.setProperty("display", "none");
      if (barra) {
        document.body.classList.remove("overnot");
        document.body.classList.add("overyea");
      }
      return false;
    }
  } else {
    return -1;
  }
};

export function toMilhar(s, func) {
  //func === null ---> resposta padrão
  //func === 1 ---> moeda
  var ss = 0;
  if (s !== undefined) {
    if (func === 1) {
      ss = s.toFixed(2).toString().replace(".", ",");
      ss = "R$ " + ss.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    } else {
      ss = s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
  return ss;
}
