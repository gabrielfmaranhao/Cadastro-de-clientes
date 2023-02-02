import { Router } from "express";
import { criarClienteController, listarClientesPorUsuarioController, deletarClienteController, atualizarClienteController, listarTodosClientesController} from "../controllers/cliente";
import { criarEmailController, listarEmailClienteController, deletarEmailController, atualizarEmailController} from "../controllers/cliente";
import { criarTelefoneController, listarTelefoneClienteController, deletarTelefoneController, atualizarTelefoneController} from "../controllers/cliente";
import { verifyAuthTokenMiddleware } from "../middlewares/token.middleware";
import { serializerMiddleware } from "../middlewares/serializer.middleware";
import { serializerCliente, serializerClienteUpdate, serializerTelefone, serializerEmail } from "../serialisers/cliente.index";



const clientRoutes = Router();
clientRoutes.get("/", listarTodosClientesController) // listar todos os clientes
clientRoutes.get("/me/", verifyAuthTokenMiddleware, listarClientesPorUsuarioController) // listar os clientes cadastrados pelo o usuário      AUTENTICADO
clientRoutes.post("/", verifyAuthTokenMiddleware, serializerMiddleware(serializerCliente), criarClienteController) // criação de um novo cliente    AUTÉNTICADO
clientRoutes.patch("/:cliente_id/", verifyAuthTokenMiddleware, serializerMiddleware(serializerClienteUpdate), atualizarClienteController) // update de um cliente   AUTÉNTICADO
clientRoutes.delete("/:cliente_id/", verifyAuthTokenMiddleware, deletarClienteController) // deleção de um cliente   AUTÉNTICADO
// Telefone routes
clientRoutes.get("/:cliente_id/telefone/", verifyAuthTokenMiddleware, listarTelefoneClienteController) // lista dos telefones de um cleinte   AUTÉNTICADO
clientRoutes.post("/:cliente_id/telefone/", verifyAuthTokenMiddleware, serializerMiddleware(serializerTelefone),  criarTelefoneController) // criar um novo telefone para um cleinte   AUTÉNTICADO
clientRoutes.patch("/telefone/:telefone_id/", verifyAuthTokenMiddleware, serializerMiddleware(serializerTelefone), atualizarTelefoneController) // update de um telefone de um cleinte   AUTÉNTICADO
clientRoutes.delete("/telefone/:telefone_id/", verifyAuthTokenMiddleware, deletarTelefoneController) // deleção de um telefone de um cleinte    AUTÉNTICADO
// Email Routes 
clientRoutes.get("/:cliente_id/email/", verifyAuthTokenMiddleware, listarEmailClienteController) // lista dos email de um cleinte   AUTÉNTICADO
clientRoutes.post("/:cliente_id/email/", verifyAuthTokenMiddleware, serializerMiddleware(serializerEmail), criarEmailController) // criar um novo email para um cleinte    AUTÉNTICADO
clientRoutes.patch("/email/:email_id/", verifyAuthTokenMiddleware, serializerMiddleware(serializerEmail), atualizarEmailController) // update de um email de um cleinte   AUTÉNTICADO
clientRoutes.delete("/email/:email_id/", verifyAuthTokenMiddleware, deletarEmailController) // deleção de um email de um cleinte  AUTÉNTICADO

export default clientRoutes