import multer from "multer";
import path from "path";
import crypto from 'crypto'
const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');
//console.log(tmpFolder)
export default {
    directory: '/tmp',
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, '/tmp')
        },
        filename(req, file, callback) {
            const fileHash = crypto.randomBytes(10).toString('hex');
            const fileName = `${fileHash}-${file.originalname}`;
            console.log('multer config', fileName);
            return callback(null, fileName);
        }
    }),
}