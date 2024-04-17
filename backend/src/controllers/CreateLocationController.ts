import { Request, Response } from "express";
import { CreateLocationService } from "../services/CreateLocationService";
import { AppDataSource } from "../data-source";


export class CreateLocationController {
    async handle(req: Request, res: Response) {
        const { lat, lng } = req.body;
        console.log(req.body);
        const latitude = lng;
        const longitude = lat;
        const service = new CreateLocationService();

        const result = await service.execute({ latitude, longitude });

        if (result instanceof Error) {
            return res.status(400).json(result.message);
        }
        return res.json(result);
    }
}