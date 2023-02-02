import { AppError } from "../errors";
import { Request, Response, NextFunction } from "express";


export const handleErrorMiddleware = (error: Error, request: Request, response: Response, next: NextFunction) => {
    if ( error instanceof AppError) {
        return response.status(error.statusCode).json({message: error.message})
    }
    console.log("Internal Server Error", error)
    return response.status(500).json("Internal Server Error")
}