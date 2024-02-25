import { NextFunction, Request, Response } from "express";
import { UploadImageService } from "../services/UploadImageService";
import { Express } from "express";


export const uploadImageMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    //const { file } = req;
    const files = req.files;
    //var number = 0;
    const lengthArr = files.length as number;
    const uploadImageService = new UploadImageService();
    try {
        for (let index = 0; index < lengthArr; index++) {
            let file = files[index];
            await uploadImageService.execute(file);
        }
        return next();
    } catch (error) {
        return res.status(400).json({ message: error.message }).send('falha')
    }
}