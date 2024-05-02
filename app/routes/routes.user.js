import { Router } from "express";
import { crearUsuario, eliminarUsuario, listarUsuario, modificarUsuario, mostrarUsuario } from "../controllers/controllers.user.js";

const rutaUser = Router();

// Get sirve para mostrar usuarios
rutaUser.get("/user/:id",mostrarUsuario);
// Get sirve para mostrar todos los usuarios
rutaUser.get("/user",listarUsuario);

// Post sirve para guardar o crear
rutaUser.post("/user",crearUsuario);

// modificar
rutaUser.put("/user",modificarUsuario);

// para borrar
rutaUser.delete("/user", eliminarUsuario);

export default rutaUser;