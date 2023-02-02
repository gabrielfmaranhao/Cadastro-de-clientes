import { atualizarClienteController, criarClienteController, deletarClienteController, listarClientesPorUsuarioController, listarTodosClientesController} from "./Rotas cliente";
import { atualizarTelefoneController, criarTelefoneController, deletarTelefoneController, listarTelefoneClienteController} from "./Rotas telefone";
import { atualizarEmailController, criarEmailController, deletarEmailController, listarEmailClienteController} from "./Rotas email";



export { criarClienteController, listarClientesPorUsuarioController,atualizarClienteController, deletarClienteController, listarTodosClientesController}
export { atualizarEmailController, criarEmailController, deletarEmailController, listarEmailClienteController}
export { atualizarTelefoneController, criarTelefoneController, deletarTelefoneController, listarTelefoneClienteController}