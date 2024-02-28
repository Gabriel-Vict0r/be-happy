import { Request, Response } from "express";
import { GetOrphanageService } from "../services/GetOrphanageService";



export class GetOrphanageController {
    async handle(req: Request, res: Response) {
        const { id } = req.params

        const service = new GetOrphanageService();

        const orphanage = await service.execute(id);

        return res.status(200).json(orphanage);
    }
}