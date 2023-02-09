import sessionRoutes from "./session.routes";
import clientRoutes from "./client.routes";
import { Express } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "../swagger.json";
const appRoutes = ( app: Express) => {
    app.use("/api/user/", sessionRoutes)
    app.use("/api/cliente/", clientRoutes)
    app.use("/api/docs/", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}
export default appRoutes