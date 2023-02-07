import Cliente from "../../entities/client.entitie";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors";

export const deleteClienteService = async (cliente_id: string):Promise<void> => {
    const clienteRepositorio = AppDataSource.getRepository(Cliente)
    const procurarCliente = await clienteRepositorio.findOneBy({id: cliente_id})
    if(!procurarCliente) {
        throw  new AppError("Cliente não encontrado")
    }
    await clienteRepositorio.delete(procurarCliente.id)
}