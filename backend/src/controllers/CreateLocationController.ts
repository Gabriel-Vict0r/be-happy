import { Request, Response } from "express";
import { CreateLocationService } from "../services/CreateLocationService";



export class CreateLocationController {
    async handle(req: Request, res: Response) {
        const { longitude, latitude } = req.body;

        const service = new CreateLocationService();

        const result = await service.execute({ longitude, latitude });

        if (result instanceof Error) {
            return res.status(400).json(result.message);
        }

        return res.json(result);
    }
}