import sessionRoutes from "./session.routes";
import clientRoutes from "./client.routes";
import { Express } from "express";

const appRoutes = ( app: Express) => {
    app.use("/api/user/", sessionRoutes)
    app.use("/api/cliente/", clientRoutes)
}
export default appRoutes