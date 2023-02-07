import { Request, Response, NextFunction } from "express";
import Cliente from "../entities/client.entitie";
import AppDataSource from "../data-source";
import Email from "../entities/email.entitie";

const verifyOwnerClientEmailMiddleware = async (request: Request, response: Response, next: NextFunction) => {
    const clienteRepositorio = AppDataSource.getRepository(Cliente);
    const emailRepositorio = AppDataSource.getRepository(Email)
    const findEmail = await emailRepositorio.findOne({relations: {cliente: true}, where:{id:request.params.email_id}})
    if(!findEmail) {
        return response.status(400).json({message: "Email não cadastrado"})
    }
    const findCliente = await clienteRepositorio.findOne({relations: {usuario: true}, where:{id: findEmail.cliente.id}})
    if(findCliente!.usuario.id !== request.user.user_id){
        return response.status(403).json({message: "Usuário não autorizado !"})
    }
    return next()


}
export default verifyOwnerClientEmailMiddleware