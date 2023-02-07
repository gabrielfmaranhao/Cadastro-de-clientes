import { Request, Response, NextFunction } from "express";
import Cliente from "../entities/client.entitie";
import AppDataSource from "../data-source";
import Telefone from "../entities/telefone.entitie";

const verifyOwnerClientTelefoneMiddleware = async (request: Request, response: Response, next: NextFunction) => {
    const clienteRepositorio = AppDataSource.getRepository(Cliente);
    const telefoneRepositorio = AppDataSource.getRepository(Telefone)
    const findTelefone = await telefoneRepositorio.findOne({relations: {cliente: true}, where:{id:request.params.telefone_id}})
    if(!findTelefone) {
        return response.status(400).json({message: "Telefone não cadastrado"})
    }
    const findCliente = await clienteRepositorio.findOne({relations: {usuario: true}, where:{id: findTelefone.cliente.id}})
    if(findCliente!.usuario.id !== request.user.user_id){
        return response.status(403).json({message: "Usuário não autorizado !"})
    }
    return next()


}
export default verifyOwnerClientTelefoneMiddleware