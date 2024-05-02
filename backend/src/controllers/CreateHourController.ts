import { Request, Response } from "express";
import { CreateHourService } from "../services/CreateHourService";


export class CreateHourController {
    async handle(req: Request, res: Response) {
        const hour = req.body;
        console.log(hour);
        const service = new CreateHourService();
        const result = await service.execute(hour);
        if (result instanceof Error) {
            return res.status(400).json(result.message)
        }
        return res.status(200).json(result)
    }
}