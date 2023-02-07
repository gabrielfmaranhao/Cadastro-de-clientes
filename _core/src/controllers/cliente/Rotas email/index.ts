import { Request, Response } from "express";
import { AppError } from "../../../errors";
import { listarEmailClienteService, criarEmailService, deletarEmailService, atualizarEmailService } from "../../../services";


export const listarEmailClienteController = async (request: Request, response: Response): Promise<Response> => {
    try {
        const cliente_id = request.body.cliente_id
        const lista = await listarEmailClienteService(cliente_id)
        return response.status(200).json(lista)
    } catch (error) {
        if(error instanceof AppError) {
            return response.status(error.statusCode).json({message: error.message})
        }
        return response.status(500).json({message: "Error interno do servidor"})    
    }
}
export const criarEmailController = async (request: Request, response: Response): Promise<Response> => {
    try {
        const data = request.body
        const cliente_id = request.params.cliente_id
        const email = await criarEmailService(cliente_id, data)
        return response.status(201).json(email)
    } catch (error) {
        if(error instanceof AppError) {
            return response.status(error.statusCode).json({message: error.message})
        }
        return response.status(500).json({message: "Error interno do servidor"})    
    }
}
export const atualizarEmailController = async (request: Request, response: Response): Promise<Response> => {
    try {
        const data = request.body
        const email_id = request.params.email_id
        console.log(email_id)
        const email = await atualizarEmailService(data, email_id)
        return response.status(200).json(email)
    } catch (error) {
        if(error instanceof AppError) {
            return response.status(error.statusCode).json({message: error.message})
        }
        return response.status(500).json({message: "Error interno do servidor"})    
    }
}
export const deletarEmailController = async (request: Request, response: Response): Promise<Response> => {
    try {
        const email_id = request.params.email_id
        await deletarEmailService(email_id)
        return response.status(200).json({})
    } catch (error) {
        if(error instanceof AppError) {
            return response.status(error.statusCode).json({message: error.message})
        }
        return response.status(500).json({message: "Error interno do servidor"})    
    }
}