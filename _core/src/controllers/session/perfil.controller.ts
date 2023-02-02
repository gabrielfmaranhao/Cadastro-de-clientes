import { Request, Response } from "express";
import { AppError } from "../../errors";
import { perfilUsuarioService } from "../../services";



export const perfilController = async (request: Request, response: Response): Promise<Response> => {
    try {
        const usuario = await perfilUsuarioService(request.user.user_id)
        const {password, ...rest} = usuario
        return response.status(200).json(rest)
    } catch (error) {
        if (error instanceof AppError) {
            return response.status(error.statusCode).json({message: error.message})
        }
        return response.status(500).json({message: "Internal server error !"})
    }
}