import { NextFunction, Request, Response } from 'express';
import yup, { ObjectSchema, boolean, object, string } from 'yup'
import { setLocale } from 'yup';
import { translation } from '../utils/translationsYup';



interface IOrphanage {
    name: string;
    cnpj: string;
    about: string;
    instructions: string;
    acept_weekend: boolean;
    id_location: string;
}
setLocale(translation);

const linkSchema: ObjectSchema<IOrphanage> = object({
    name: string().required().min(3).nonNullable(),
    cnpj: string().max(18).required().nonNullable(),
    about: string().optional(),
    instructions: string().min(10),
    acept_weekend: boolean().nonNullable().required(),
    id_location: string().nonNullable().required()
})

export const validateDataMiddlewares = async (req: Request, res: Response, next: NextFunction) => {
    const data: IOrphanage = req.body;
    try {
        await linkSchema.validate(data);
        return next();
    } catch (error) {
        return res.status(400).json({ type: error.name, message: error.message })
    }
}