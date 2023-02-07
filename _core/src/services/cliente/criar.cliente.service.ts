import AppDataSource from "../../data-source";
import Cliente from "../../entities/client.entitie";
import Usuario from "../../entities/user.entitie";
import { AppError } from "../../errors";
import { IClienteRequest } from "../../interfaces/cliente";
import { criarEmailService } from "../email/criar.email.service";
import { criarTelefoneService } from "../telefone/criar.telefone.service";

export const criarClienteService = async (data: IClienteRequest, user_id:string):Promise<Cliente> => {
    const usuarioRepositorio = AppDataSource.getRepository(Usuario)
    const clienteRepositorio = AppDataSource.getRepository(Cliente)
    const usuario = await usuarioRepositorio.findOneBy({id:user_id})
    const procurarCliente = await clienteRepositorio.findOneBy({cpf: data.cpf})

    if(procurarCliente) {
        throw new AppError("Cpf já cadastrado")
    }
    const newCliente = clienteRepositorio.create({cpf: data.cpf, usuario: usuario!, criado_por: usuario!.username, nome_completo: data.nome_completo})
    await clienteRepositorio.save(newCliente)

    if(data.email) {
        try {
            await criarEmailService(newCliente.id, data.email)  
        } catch (error) {
            if(error instanceof AppError) {
                console.log()
            }
        }
    }
    if(data.telefone) {
        try {
             await criarTelefoneService(newCliente.id, data.telefone)
        } catch (error) {
            if(error instanceof AppError) {
                console.log()
            }
        }
       
    }
    const resultado = await clienteRepositorio.findOne({ relations:{emails:true, Telefones:true}, where: {cpf: data.cpf} })
    return resultado!
}