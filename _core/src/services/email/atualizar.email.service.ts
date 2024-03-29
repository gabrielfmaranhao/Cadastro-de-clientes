import Email from "../../entities/email.entitie";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors";
import { IEmailRequest } from "../../interfaces/cliente";

export const atualizarEmailService = async (data: IEmailRequest, email_id: string):Promise<Email | void> => {
    const emailRepositorio = AppDataSource.getRepository(Email)
    const procurarEmail = await emailRepositorio.findOneBy({id: email_id})
    if(!procurarEmail) {
        throw new AppError("Email não cadastrado")
    }
    const procurarNovoEmail = await emailRepositorio.findOneBy({email: data.email})
    if(procurarNovoEmail) {
        throw new AppError("Email já cadastrado")
    }
    await emailRepositorio.update(procurarEmail.id, data)
    const email = await emailRepositorio.findOneBy({id: procurarEmail.id})
    return email!
}