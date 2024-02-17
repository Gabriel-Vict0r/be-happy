import { Request, Response } from "express";
import { CreateOrphanageService } from "../services/CreateOrphanageService";


export class CreateOrphanageController {
    async handle(req: Request, res: Response) {
        const orphanage = req.body;
        console.log(orphanage)
        const service = new CreateOrphanageService();

        const result = await service.execute(orphanage);

        if (result instanceof Error) {
            return res.status(400).json(result.message)
        }
        return res.status(200).json(result);
    }
}