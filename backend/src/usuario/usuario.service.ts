import { Injectable, Inject, Param, Get } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { Repository } from "typeorm";

import { ResultadoDto } from "src/dto/resultado.dto";
import { UsuarioCadastrarDto, UsuarioRepository } from "./dto/usuario.cadastrar.dto";
import { Usuario } from "./usuario.entity";


@Injectable()
export class UsuarioService {
  constructor(
    @Inject(UsuarioRepository.USUARIO)
    private usuarioRepository: Repository<Usuario>
  ) {}

  async listar(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }
  
  async listarUser(id: number): Promise<any> {
    return this.usuarioRepository.findOne(id);
  }

  async cadastrar(data: UsuarioCadastrarDto): Promise<ResultadoDto> {
    let usuario = new Usuario();
    usuario.email = data.email;
    usuario.name = data.name;
    usuario.password = bcrypt.hashSync(data.password, 8);

    return this.usuarioRepository
      .save(usuario)
      .then(() => {
        return <ResultadoDto>{
          status: true,
          mensagem: "Usuário cadastrado com sucesso",
        };
      })
      .catch(() => {
        return <ResultadoDto>{
          status: false,
          mensagem: "Houve um errro ao cadastrar o usuário",
        };
      });
  }

  async findOne(id: number): Promise<Usuario | undefined> {
    return this.usuarioRepository.findOne({ id: id });
  }
}
