import { Request, Response } from "express";
import { GetPictureService } from "../services/GetPictureService";


export class GetPictureController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const service = new GetPictureService();

        const pictures = await service.execute(id);
        return res.json(pictures).status(200);
    }
}