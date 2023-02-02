import { Request, Response } from "express";
import { AppError } from "../../../errors";
import { deletarTelefoneService, criarTelefoneService, listarTelefoneClienteService, atualizarTelefoneService } from "../../../services";

export const listarTelefoneClienteController = async (request: Request, response: Response): Promise<Response> => {
    try {
        const cliente_id = request.body.cliente_id
        const lista = await listarTelefoneClienteService(cliente_id)
        return response.status(200).json(lista)
    } catch (error) {
        if(error instanceof AppError) {
            return response.status(error.statusCode).json({message: error.message})
        }
        return response.status(500).json({message: "Error interno do servidor"})    
    }
}
export const criarTelefoneController = async (request: Request, response: Response): Promise<Response> => {
    try {
        const data = request.body
        const cliente_id = request.params.cliente_id
        const telefone = await criarTelefoneService(cliente_id, data)
        return response.status(201).json(telefone)
    } catch (error) {
        if(error instanceof AppError) {
            return response.status(error.statusCode).json({message: error.message})
        }
        return response.status(500).json({message: "Error interno do servidor"})    
    }
}
export const atualizarTelefoneController = async (request: Request, response: Response): Promise<Response> => {
    try {
        const data = request.body
        const telefone_id = request.params.email_id
        const telefone = await atualizarTelefoneService(data, telefone_id)
        return response.status(200).json(telefone)
    } catch (error) {
        if(error instanceof AppError) {
            return response.status(error.statusCode).json({message: error.message})
        }
        return response.status(500).json({message: "Error interno do servidor"})    
    }
}
export const deletarTelefoneController = async (request: Request, response: Response): Promise<Response> => {
    try {
        const telefone_id = request.params.telefone_id
        await deletarTelefoneService(telefone_id)
        return response.status(200).json({})
    } catch (error) {
        if(error instanceof AppError) {
            return response.status(error.statusCode).json({message: error.message})
        }
        return response.status(500).json({message: "Error interno do servidor"})    
    }
}