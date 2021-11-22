export interface UsuarioCadastrarDto {
  name: string;
  email: string;
  password: string;
}

export enum UsuarioEnum {
  USER_LISTEN = "listar",
  USER_LISTEN_ID = "listar/:id",
  USER_POST = "cadastrar",
  USER_POST_LOGIN = "login",
  USER_POST_LOGIN_TOKEN = "login-token",
}

export enum UsuarioRepository {
  USUARIO = "USUARIO_REPOSITORY",
}
