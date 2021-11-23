import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ResultadoDto } from "src/dto/resultado.dto";
import { UsuarioCadastrarDto, UsuarioEnum } from "./dto/usuario.cadastrar.dto";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";

@Controller("posts")
export class UsuarioController {
  constructor(
    private readonly usuarioService: UsuarioService,
  ) {}

  @Get(UsuarioEnum.USER_LISTEN)
  async listar(): Promise<Usuario[]> {
    return this.usuarioService.listar();
  }

  @Get(UsuarioEnum.USER_LISTEN_ID)
  async listarUser(@Param("id") id: number): Promise<Usuario[]> {
    return this.usuarioService.listarUser(id);
  }

  @Post(UsuarioEnum.USER_POST)
  async cadastrar(@Body() data: UsuarioCadastrarDto): Promise<ResultadoDto> {
    return this.usuarioService.cadastrar(data);
  }

  @UseGuards(AuthGuard("local"))
  @Post(UsuarioEnum.USER_POST_LOGIN)
  async login(@Request() req) {
  }

  @Post(UsuarioEnum.USER_POST_LOGIN_TOKEN)
  async loginToken(@Request() req, @Body() data) {
  }
}
