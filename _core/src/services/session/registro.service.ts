import AppDataSource from "../../data-source";
import { AppError } from "../../errors";
import Usuario from "../../entities/user.entitie";
import Cliente from "../../entities/client.entitie";
import { ISessionRegisterRequest } from "../../interfaces/session";
import { hash } from "bcrypt";


export const registroUsuarioService = async (data:ISessionRegisterRequest):Promise<Usuario> => {
    const {username, cpf, password} = data
    const usuarioRepositorio = AppDataSource.getRepository(Usuario);
    const clienteRepositorio = AppDataSource.getRepository(Cliente)
    const procurarUsername = await usuarioRepositorio.findOneBy({username})
    const procurarCpf = await usuarioRepositorio.findOneBy({cpf})
    const procurarCpfCliente = await clienteRepositorio.findOneBy({cpf})
    if( procurarCpf ) {
        throw new AppError("Cpf já cadastrado", 400)
    }
    if( procurarUsername ) {
        throw new AppError("Username já cadastrado", 400)
    }
    if( procurarCpfCliente) {
        throw new AppError("Cpf já cadastrado como cliente", 400)
    }
    const hashPassword = await hash(password, 10)
    const novoUsuario = usuarioRepositorio.create({password: hashPassword, username, cpf})
    await usuarioRepositorio.save(novoUsuario)
    return novoUsuario


}