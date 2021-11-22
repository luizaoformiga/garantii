import { Connection } from "typeorm";
import { UsuarioRepository } from "./dto/usuario.cadastrar.dto";
import { Usuario } from "./usuario.entity";

export const usuarioProviders = [
  {
    provide: UsuarioRepository.USUARIO,
    useFactory: (connection: Connection) => connection.getRepository(Usuario),
    inject: ["DATABASE_CONNECTION"],
  },
];
