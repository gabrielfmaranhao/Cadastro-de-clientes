import Telefone from "../../entities/telefone.entitie";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors";
import { ITelefoneRequest } from "../../interfaces/cliente";

export const atualizarTelefoneService = async (data: ITelefoneRequest, telefone_id: string):Promise<Telefone | void> => {
    const telefoneRepositorio = AppDataSource.getRepository(Telefone)
    const procurarTelefone = await telefoneRepositorio.findOneBy({id: telefone_id})
    const procurarNovoTelefone = await telefoneRepositorio.findOneBy({telefone: data.number})
    if(!procurarTelefone) {
        throw new AppError("Telefone não cadastrado")
    }
    if(procurarNovoTelefone) {
        throw new AppError("Telefone já cadastrado")
    }
    await telefoneRepositorio.update(procurarTelefone.id, {telefone: data.number})
    const telefone = await telefoneRepositorio.findOneBy({id: procurarTelefone.id})
    return telefone!
}