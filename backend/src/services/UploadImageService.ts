import S3Storage from "../utils/S3Storage";

export class UploadImageService {
    async execute(file: Express.Multer.File) {
        const s3Storage = new S3Storage();

        await s3Storage.saveFile(file.filename);
    }
}