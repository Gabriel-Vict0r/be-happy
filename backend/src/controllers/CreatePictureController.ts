import { Request, Response } from "express";
import { CreatePictureService, IPicture } from "../services/CreatePictureService";
import { UploadImageService } from "../services/UploadImageService";



export class CreatePictureController {
    async handle(req: Request, res: Response) {
        //const objImage = req.body;
        const { file } = req;
        const { id_orphanage } = req.body
        const urlImage = `https://behappybucket.s3.amazonaws.com/${file.filename}`;
        console.log(urlImage)

        const service = new CreatePictureService();
        const objPicture: IPicture = {
            id_orphanage: id_orphanage,
            url: urlImage
        }
        console.log(objPicture);
        const result = await service.execute(objPicture);

        if (result instanceof Error) {
            return res.status(400).send('erro na controller: ').json(result.message);
        }
        return res.status(200).json(result);
    }
}