import { Request, Response, NextFunction } from "express";
import Cliente from "../entities/client.entitie";
import AppDataSource from "../data-source";
const verifyOwnerClientMiddleware = async (request: Request, response: Response, next: NextFunction) => {
    const clienteRepositorio = AppDataSource.getRepository(Cliente);
    const findCliente = await clienteRepositorio.findOne({relations: {usuario: true}, where:{id: request.params.cliente_id} })
    if(!findCliente) {
        return response.status(400).json({message: "Cliente não exite !"})
    }
    if(findCliente.usuario.id !== request.user.user_id){
        return response.status(403).json({message: "Usuário não autorizado !"})
    }
    return next()


}
export default verifyOwnerClientMiddleware