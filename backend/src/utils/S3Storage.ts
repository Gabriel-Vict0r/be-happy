import AWS, { AWSError, S3 } from 'aws-sdk'
import path from 'path';
import multerConfig from '../config/multer';
import fs from 'fs'

class S3Storage {
    private client: S3;

    constructor() {
        this.client = new AWS.S3({
            region: 'us-east-1'
        })
    }
    async saveFile(filename: string): Promise<void> {
        const originalPath = path.resolve(multerConfig.directory, filename);
        const mime = require('mime')
        const ContentType = mime.getType(originalPath)
        if (!ContentType) {
            throw new Error('File not found');
        }

        const fileContent = await fs.promises.readFile(originalPath);

        this.client.putObject({
            Bucket: 'behappybucket',
            Key: filename,
            ACL: 'public-read',
            Body: fileContent,
            ContentType: 'image/*',
        }, (err: AWSError, data: S3.PutObjectOutput) => {
            if (err) {
                return new Error(`error to upload file ${err}`);
            }
        })
            .promise()

        await fs.promises.unlink(originalPath)

    }
}
export default S3Storage