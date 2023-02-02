import { ISessionLoginRequest } from "../../interfaces/session";
import { AppError } from "../../errors";
import AppDataSource from "../../data-source";
import Usuario from "../../entities/user.entitie";
import { compare } from "bcrypt";
import  jwt  from "jsonwebtoken";


export const entrarUsuarioService = async (data: ISessionLoginRequest): Promise<string> => {
    const usuarioRepositorio = AppDataSource.getRepository(Usuario);
    const procurarUsuario = await usuarioRepositorio.findOneBy({username: data.username});
    if(!procurarUsuario) {
        throw new AppError("Usuário ou senha incorretos", 400)
    }
    const passwordMatch = await compare(data.password, procurarUsuario.password)
    if(!passwordMatch) {
        throw new AppError("Usuário ou senha incorretos", 400)
    }
    const token = jwt.sign({user_id: procurarUsuario.id}, process.env.SECRECT_KEY as string, { expiresIn: "24h", subject: procurarUsuario.id})
    return token
}