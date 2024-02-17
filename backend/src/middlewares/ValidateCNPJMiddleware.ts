import { NextFunction, Request, Response } from "express";
import { validate } from "../utils/cnpjValidate";


export const validateCNPJMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { cnpj } = req.body;
    const isValid = validate(cnpj);
    if (isValid) {
        next();
    }
    else {
        return res.status(400).send('CNPJ Inválido')
    }
}