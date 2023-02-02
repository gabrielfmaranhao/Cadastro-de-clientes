import { Request, NextFunction, Response } from "express";
import { ValidationError } from "yup";
import { MixedSchema } from "yup/lib/mixed";

export const serializerMiddleware = (serializer: MixedSchema) => async (req: Request, res: Response, nex: NextFunction) => {
    await serializer.validate(req.body, {stripUnknown: true, abortEarly:false})
    .then((date) => {
        req.body = date 
        nex()
    } ).catch((error: ValidationError) => res.status(400).json({message: error.errors})) 
}