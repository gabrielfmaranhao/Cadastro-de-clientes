import { Router } from "express";
import { serializerMiddleware } from "../middlewares/serializer.middleware";
import { verifyAuthTokenMiddleware } from "../middlewares/token.middleware";
import { serializerLogin, serializerRegister } from "../serialisers/session.index";
import { entrarController } from "../controllers/session/entrar.controller";
import { registroController } from "../controllers/session/registro.controller";
import { perfilController } from "../controllers/session/perfil.controller";

const sessionRoutes = Router();
sessionRoutes.post("/login/", serializerMiddleware(serializerLogin), entrarController) // Login de usuário
sessionRoutes.post("/register/", serializerMiddleware(serializerRegister), registroController) // Registro de usuário
sessionRoutes.get("/profile/", verifyAuthTokenMiddleware, perfilController) // Só usuário autenticado

export default sessionRoutes