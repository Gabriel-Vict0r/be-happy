import { Request, Response } from "express";
import { CreatePictureService } from "../services/CreatePictureService";



export class CreatePictureController {
    async handle(req: Request, res: Response) {
        const objImage = req.body;

        const service = new CreatePictureService();

        const result = await service.execute(objImage);

        if (result instanceof Error) {
            return res.status(400).json(result.message);
        }
        return res.status(200).json(result);
    }
}