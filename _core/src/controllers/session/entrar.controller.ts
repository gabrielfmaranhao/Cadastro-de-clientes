import { Request, Response } from "express";
import { AppError } from "../../errors";
import { entrarUsuarioService } from "../../services";
import { ISessionLoginRequest } from "../../interfaces/session";

export const entrarController = async (request: Request, response: Response): Promise<Response> => {
    try {
        const data: ISessionLoginRequest = request.body
        const token: string = await entrarUsuarioService(data)
        return response.status(200).json({access: token})
    } catch (error) {
        if (error instanceof AppError) {
            return response.status(error.statusCode).json({message: error.message})
        }
        return response.status(500).json({message: "Internal server error !"})
    }
}