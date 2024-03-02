import { Request, Response, Router } from "express";
import { CreateLocationController } from "./controllers/CreateLocationController";
import { CreateOrphanageController } from "./controllers/CreateOrphanageController";
import { CreatePictureController } from "./controllers/CreatePictureController";
import { validateCNPJMiddleware } from "./middlewares/ValidateCNPJMiddleware";
import { validateDataMiddlewares } from "./middlewares/ValidateDataMiddleware";
import multer from "multer";
import multerConfig from './config/multer'
import { uploadImageMiddleware } from "./middlewares/UploadImageMiddleware";
import { GetOrphanageController } from "./controllers/GetOrphanageController";
import { GetPictureController } from "./controllers/GetPictureController";
import { GetLocationsController } from "./controllers/GetLocationsController";

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

routes.get('/getOrphanage/:id', new GetOrphanageController().handle)
routes.get('/getPictures/:id', new GetPictureController().handle);
routes.get('/getLocations', new GetLocationsController().handle);
export { routes }