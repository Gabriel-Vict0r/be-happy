import { Request, Response } from "express";
import { CreateOrphanageService } from "../services/CreateOrphanageService";


export class CreateOrphanageController {
    async handle(req: Request, res: Response) {
        const orphanage = req.body;
        const newOrph = {
            name: orphanage.nome,
            cnpj: orphanage.cnpj,
            id_location: orphanage.position,
            about: orphanage.sobre,
            phone: orphanage.telefone,
            instructions: orphanage.instructions,
            acept_weekend: orphanage.abrir_fim_de_semana
        }
        console.log(newOrph)
        const service = new CreateOrphanageService();

        const result = await service.execute(newOrph);

        if (result instanceof Error) {
            return res.status(400).json(result.message)
        }
        return res.status(200).json(result);
    }
}