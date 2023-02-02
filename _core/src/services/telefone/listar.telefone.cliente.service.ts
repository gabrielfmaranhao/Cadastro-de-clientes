import AppDataSource from "../../data-source";
import Cliente from "../../entities/client.entitie";
import Telefone from "../../entities/telefone.entitie";
import { AppError } from "../../errors";

export const listarTelefoneClienteService = async (client_id: string):Promise<Telefone[]> => {
    const clienteRepositorio = AppDataSource.getRepository(Cliente)
    const telefoneRepositorio = AppDataSource.getRepository(Telefone)
    const procurarCliente = await clienteRepositorio.findOneBy({id: client_id})

    if(!procurarCliente) {
        throw new AppError("Cliente não encontrado")
    }
    const listaTelefone = await telefoneRepositorio.find({where: {cliente: procurarCliente} })
    return listaTelefone
}