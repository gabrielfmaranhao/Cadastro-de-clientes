import { Request, Response } from "express";
import { AppError } from "../../errors";
import { ISessionRegisterRequest} from "../../interfaces/session";
import { registroUsuarioService } from "../../services";


export const registroController = async (request: Request, response: Response): Promise<Response> => {
    try {
        const data: ISessionRegisterRequest = request.body
        const usuario = await registroUsuarioService(data)
        const { password, ...rest} = usuario
        return response.status(201).json(rest)
    } catch (error) {
        if (error instanceof AppError) {
            return response.status(error.statusCode).json({message: error.message})
        }
        return response.status(500).json({message: "Internal server error !"})
    }
}