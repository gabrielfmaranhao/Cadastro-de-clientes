import Telefone from "../../entities/telefone.entitie";
import Cliente from "../../entities/client.entitie";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors";
import { ITelefoneRequest } from "../../interfaces/cliente";


export const criarTelefoneService = async (cliente_id: string, data: ITelefoneRequest):Promise<Telefone | void> => {
    const clienteRepositorio = AppDataSource.getRepository(Cliente)
    const telefoneRepositorio = AppDataSource.getRepository(Telefone)
    const procurarTelefone = await telefoneRepositorio.findOneBy({telefone: data.number})
    const procurarCliente = await clienteRepositorio.findOneBy({id:cliente_id})
    
    if(procurarTelefone) {
        throw new AppError("Telefone já cadastrado")
    }

    if(!procurarCliente) {
        throw new AppError("Cliente não existe")
    }
    const novoTelefone = telefoneRepositorio.create({cliente: procurarCliente, telefone: data.number})
    await telefoneRepositorio.save(novoTelefone)
    return novoTelefone
}