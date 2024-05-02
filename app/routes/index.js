import { Router } from "express";
import rutaMain from "./routes.main.js";
import rutaUser from "./routes.user.js";

const ruta = Router();

ruta.use("/",rutaMain);
ruta.use("/api",rutaUser);

export default ruta;