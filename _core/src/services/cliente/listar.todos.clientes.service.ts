import Cliente from "../../entities/client.entitie";
import AppDataSource from "../../data-source";

export const listarTodosClientesService = async ():Promise<Cliente[]> => {
    const clienteRepositorio = AppDataSource.getRepository(Cliente)
    const lista = await clienteRepositorio.find({relations:{emails:true, Telefones:true}})
    return lista
}