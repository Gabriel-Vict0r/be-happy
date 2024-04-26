import { Request, Response } from "express";
import { GetOrphanagesService } from "../services/GetOrphanagesService";


export class GetOrphanagesController {
    async handle(req: Request, res: Response) {
        const service = new GetOrphanagesService();
        const orphanages = await service.execute();
        return res.status(200).json(orphanages);
    }
}