import {Router} from "express";
import clientController from "../controller/client.controller.js";
import { clientSchema } from "../schema/client.schema.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {validate} from "../middlewares/validation.middleware.js"

const router = Router();

router.post('/register', validate(clientSchema), clientController.createClientController);
router.post('/login', clientController.createClientController);

export default router;