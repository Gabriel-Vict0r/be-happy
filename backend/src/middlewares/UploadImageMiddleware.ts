import { NextFunction, Request, Response } from "express";
import { UploadImageService } from "../services/UploadImageService";



export const uploadImageMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { file } = req;
    const uploadImageService = new UploadImageService();
    try {
        await uploadImageService.execute(file);
        return next();
    } catch (error) {
        return res.status(400).json({ message: error.message }).send('falha')
    }
}