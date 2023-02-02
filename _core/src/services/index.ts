import { criarClienteService } from "./cliente/criar.cliente.service";
import { deleteClienteService } from "./cliente/deletar.cliente.service";
import { listarTodosClientesService } from "./cliente/listar.todos.clientes.service";
import { listarClientesPorUsuarioService } from "./cliente/listar.cliente.usuario.service";
import { atualizarClienteService } from "./cliente/atualizar.cliente.service";

import { criarEmailService } from "./email/criar.email.service";
import { deletarEmailService } from "./email/deletar.email.service";
import { listarEmailClienteService } from "./email/listar.email.usuario.service";
import { atualizarEmailService } from "./email/atualizar.email.service";

import { listarTelefoneClienteService } from "./telefone/listar.telefone.cliente.service";
import { criarTelefoneService } from "./telefone/criar.telefone.service";
import { atualizarTelefoneService } from "./telefone/atualizar.telefone.service";
import { deletarTelefoneService } from "./telefone/deletar.telefone.service";

import { entrarUsuarioService } from "./session/entrar.service";
import { registroUsuarioService } from "./session/registro.service";
import { perfilUsuarioService } from "./session/perfil.service";


export { criarClienteService, atualizarClienteService, deleteClienteService, listarClientesPorUsuarioService, listarTodosClientesService}
export { criarEmailService, deletarEmailService, listarEmailClienteService, atualizarEmailService}
export { listarTelefoneClienteService, criarTelefoneService, atualizarTelefoneService, deletarTelefoneService}
export { entrarUsuarioService, registroUsuarioService, perfilUsuarioService}