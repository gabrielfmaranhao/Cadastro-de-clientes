import Cliente from "../../entities/client.entitie";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors";
import { IClienteUpdate } from "../../interfaces/cliente";


export const atualizarClienteService = async (cliente_id: string, data: IClienteUpdate):Promise<Cliente> => {
    const clienteRepositorio = AppDataSource.getRepository(Cliente)
    const procurarCliente = await clienteRepositorio.findOneBy({id: cliente_id})
    const procurarCpf = await clienteRepositorio.findOneBy({cpf: data.cpf})
    if(procurarCpf) {
        throw new AppError("Cpf já cadastrado")
    }
    if(!procurarCliente) {
        throw new AppError("Cliente não cadastrado")
    }
    await clienteRepositorio.update(procurarCliente.id, data)
    const cliente = await clienteRepositorio.findOneBy({id: procurarCliente.id})
    return cliente!

}