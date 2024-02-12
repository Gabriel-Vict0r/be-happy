import { Router } from "express";
import { CreateLocationController } from "./controllers/CreateLocationController";



const routes = Router();

routes.post('/location', new CreateLocationController().handle);

export { routes }