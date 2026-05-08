import {Router} from "express";
import clientRouters from "./client.routers.js"

const routers = Router();

routers.use("/client", clientRouters);

export {routers};

