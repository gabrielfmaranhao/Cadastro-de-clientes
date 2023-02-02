import AppDataSource from "../../data-source";
import Email from "../../entities/email.entitie";
import { AppError } from "../../errors";

export const deletarEmailService = async (email_id: string):Promise<void> => {
    const emailRepositorio = AppDataSource.getRepository(Email)
    const procurarEmail = await emailRepositorio.findOneBy({id: email_id})
    if(!procurarEmail) {
        throw new AppError("Email não cadastrado")
    }
    await emailRepositorio.delete(email_id)
}