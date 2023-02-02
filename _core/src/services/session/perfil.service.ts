import Usuario from "../../entities/user.entitie";
import AppDataSource from "../../data-source";


export const perfilUsuarioService = async (user_id:string): Promise<Usuario> => {
    const usuarioRepositorio = AppDataSource.getRepository(Usuario)
    const usuario = await usuarioRepositorio.findOneBy({id: user_id})
    return usuario!
}