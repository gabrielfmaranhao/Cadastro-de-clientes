import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import Usuario from "../entities/user.entitie";
import AppDataSource from "../data-source";
export const verifyAuthTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const userRepository = AppDataSource.getRepository(Usuario)
    let token = req.headers.authorization;
    if(!token) {
        return res.status(401).json({message:"Token não existe ou é inválido"})
    }

    token = token.split(" ")[1];

    jwt.verify(token, process.env.SECRECT_KEY as string, async (error: any, decode: any)=> {
        if(error) {
            return res.status(401).json({
                message: "Token invalido"
            });
        }
        const user = await userRepository.findOneBy({id: decode.user_id})
        if(!user) {
            return res.status(401).json({message: "Usuário não exite"})
        }
        req.user =  {user_id: user!.id}
        return next()
    })
    
}