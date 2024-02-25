import { Request, Response, Router } from "express";
import { CreateLocationController } from "./controllers/CreateLocationController";
import { CreateOrphanageController } from "./controllers/CreateOrphanageController";
import { CreatePictureController } from "./controllers/CreatePictureController";
import { validateCNPJMiddleware } from "./middlewares/ValidateCNPJMiddleware";
import { validateDataMiddlewares } from "./middlewares/ValidateDataMiddleware";
import multer from "multer";
import multerConfig from './config/multer'
import { uploadImageMiddleware } from "./middlewares/UploadImageMiddleware";

const routes = Router();
const upload = multer(multerConfig);

routes.post('/location', new CreateLocationController().handle);

routes.post('/orphanage',
    validateDataMiddlewares,
    validateCNPJMiddleware,
    new CreateOrphanageController().handle);

routes.post('/picture',
    upload.array('image'),
    //upload.single('image'),
    uploadImageMiddleware,
    new CreatePictureController().handle);
export { routes }