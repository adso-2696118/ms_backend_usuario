import { Router } from "express";
import rutaMain from "./routes.main.js";
import rutaUser from "./routes.user.js";
import swaggerUi from 'swagger-ui-express';
import swaggerFile from "../tools/swagger-output.json";
// import swaggerFile from '../tools/swagger-output.json' assert { type: "json" };

/**
 * Esta es la ruta de mi proyecto
 * @type {object}
 */
const ruta = Router();

ruta.use("/",rutaMain);
ruta.use("/api",rutaUser);
ruta.use('/doc', swaggerUi.serve, 
swaggerUi.setup(swaggerFile))

export default ruta;