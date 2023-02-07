import Cliente from "../../entities/client.entitie";
import AppDataSource from "../../data-source";

export const listarClientesPorUsuarioService = async (user_id:string):Promise<Cliente[]> => {
    const clienteRepositorio = AppDataSource.getRepository(Cliente)
    const procurarCliente = await clienteRepositorio.find(
        {
            relations:{
                Telefones:true,
                emails:true
            }, 
            where:{
                usuario: { 
                    id: user_id 
                }
            } 
        })
    return procurarCliente
}