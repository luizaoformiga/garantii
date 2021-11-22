const USER_CTG = "user_ctg";

export var Logger = async (config) => {
  var id = await localStorage.getItem(USER_CTG);
  if (id !== undefined && id != null && id !== "" && id !== 0) {
    if (config.url === "LogAcesso/Salva") {
      var antigo = JSON.parse(config.data);
      config.data = JSON.stringify({
        origem: antigo.origem,
        url: antigo.url,
        ctg: id,
      });
    }
  }
  return config;
};
