import { Router } from "express";
import { 
    crearUsuario, 
    eliminarUsuario, 
    listarUsuario, 
    modificarUsuario, 
    mostrarUsuario,
    logueoUsuario } from "../controllers/controllers.user.js";
import { verifyToken } from "../middlewares/oauth.js";

const rutaUser = Router();

// Get sirve para mostrar usuarios
rutaUser.get("/user/:id",mostrarUsuario);
// Get sirve para mostrar todos los usuarios
rutaUser.get("/user", listarUsuario);

// Post sirve para guardar o crear
rutaUser.post("/user", verifyToken, crearUsuario);

// modificar
rutaUser.put("/user",verifyToken, modificarUsuario);

// para borrar
rutaUser.delete("/user",verifyToken, eliminarUsuario);

// para loguearse
rutaUser.post("/login", logueoUsuario);
export default rutaUser;