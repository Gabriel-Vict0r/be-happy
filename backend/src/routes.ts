import { Router } from "express";
import { CreateLocationController } from "./controllers/CreateLocationController";
import { CreateOrphanageController } from "./controllers/CreateOrphanageController";
import { CreatePictureController } from "./controllers/CreatePictureController";
import { validateCNPJMiddleware } from "./middlewares/ValidateCNPJMiddleware";
import { validateDataMiddlewares } from "./middlewares/ValidateDataMiddleware";



const routes = Router();

routes.post('/location', new CreateLocationController().handle);

routes.post('/orphanage',
    validateDataMiddlewares,
    validateCNPJMiddleware,
    new CreateOrphanageController().handle);

routes.post('/picture', new CreatePictureController().handle);

export { routes }