import AppDataSource from "../../data-source";
import Telefone from "../../entities/telefone.entitie";
import { AppError } from "../../errors";

export const deletarTelefoneService = async (telefone_id: string):Promise<void> => {
    const telefoneRepositorio = AppDataSource.getRepository(Telefone)
    const procurarTelefone = await telefoneRepositorio.findOneBy({id: telefone_id})
    if(!procurarTelefone) {
        throw new AppError("Telefone não cadastrado")
    }
    await telefoneRepositorio.delete(telefone_id)
}