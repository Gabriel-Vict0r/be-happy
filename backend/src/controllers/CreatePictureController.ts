import { Request, Response } from "express";
import { CreatePictureService, IPicture } from "../services/CreatePictureService";
import { UploadImageService } from "../services/UploadImageService";
import { Picture } from "../entity/Picture";


type TResult = Picture[]
export class CreatePictureController {
    async handle(req: Request, res: Response) {
        //const objImage = req.body;
        const { files } = req;
        const { id_orphanage } = req.body
        const lengthArr = files.length as number;
        let resultFinal: TResult = [];
        for (let index = 0; index < lengthArr; index++) {
            let presentFile = files[index];
            let urlImage = `https://behappybucket.s3.amazonaws.com/${presentFile.filename}`;
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
            console.log('result', result)
            resultFinal.push(result)
        }
        return res.status(200).json(resultFinal.map((element) => element));
    }
}