import { Request, Response } from "express";
import { GetLocationService } from "../services/GetLocationsService";


export class GetLocationsController {
    async handle(req: Request, res: Response) {
        const service = new GetLocationService();

        const locations = await service.execute();

        return res.status(200).json(locations);
    }
}