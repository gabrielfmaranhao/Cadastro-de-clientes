import Email from "../../entities/email.entitie";
import Cliente from "../../entities/client.entitie";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors";
import { IEmailRequest } from "../../interfaces/cliente";



export const criarEmailService = async (cliente_id: string, data: IEmailRequest):Promise<Email | void> => {
    const clienteRepositorio = AppDataSource.getRepository(Cliente)
    const emailRepositorio = AppDataSource.getRepository(Email)
    const procurarEmail = await emailRepositorio.findOneBy({email: data.email})
    const procurarCliente = await clienteRepositorio.findOneBy({id:cliente_id})
    
    if(procurarEmail) {
        throw new AppError("Email já cadastrado")
    }

    if(!procurarCliente) {
        throw new AppError("Cliente não existe")
    }
    const novoEmail = emailRepositorio.create({cliente: procurarCliente, email: data.email})
    await emailRepositorio.save(novoEmail)
    return novoEmail
}