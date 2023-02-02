import { Request, Response } from "express";
import { AppError } from "../../../errors";
import { criarClienteService, atualizarClienteService, deleteClienteService, listarClientesPorUsuarioService, listarTodosClientesService } from "../../../services";

export const listarTodosClientesController = async (request: Request, response: Response):Promise<Response> => {
    const listaCliente = await listarTodosClientesService();
    return response.status(200).json(listaCliente)
} 

export const listarClientesPorUsuarioController = async (request: Request, response: Response):Promise<Response> => {
    const {user_id} = request.user
    const listaCliente = await listarClientesPorUsuarioService(user_id);
    return response.status(200).json(listaCliente);        
}

export const criarClienteController = async (request: Request, response: Response):Promise<Response> => {
    try {
        const {user_id} = request.user
        const data = request.body; 
        const cliente = await criarClienteService(data, user_id)
        return response.status(201).json(cliente)
    } catch (error) {
        if (error instanceof AppError) {
            return response.status(error.statusCode).json({message: error.message})
        }
        return response.status(500).json({message: "Internal server error !"})
    }
        
}

export const atualizarClienteController = async (request: Request, response: Response):Promise<Response> => {
    try {
        const data = request.body
        const id :string = request.params.cliente_id
        const cliente = await atualizarClienteService(id, data)
        return response.status(201).json(cliente)
    } catch (error) {
        if (error instanceof AppError) {
            return response.status(error.statusCode).json({message: error.message})
        }
        return response.status(500).json({message: "Internal server error !"})
    }
        
}

export const deletarClienteController = async (request: Request, response: Response):Promise<Response> => {
    try {
        const id: string = request.params.cliente_id
        await deleteClienteService(id)
        return response.status(200).json({})
    }  catch (error) {
        if (error instanceof AppError) {
            return response.status(error.statusCode).json({message: error.message})
        }
        return response.status(500).json({message: "Internal server error !"})
    }
        
}
