import AppDataSource from "../../data-source";
import Cliente from "../../entities/client.entitie";
import Email from "../../entities/email.entitie";
import { AppError } from "../../errors";

export const listarEmailClienteService = async (client_id: string):Promise<Email[]> => {
    const clienteRepositorio = AppDataSource.getRepository(Cliente)
    const email = AppDataSource.getRepository(Email)
    const procurarCliente = await clienteRepositorio.findOneBy({id: client_id})

    if(!procurarCliente) {
        throw new AppError("Cliente não encontrado")
    }
    const listaEmail = await email.find({where: {cliente: procurarCliente} })
    return listaEmail
}