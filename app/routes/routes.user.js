import { Router } from "express";
import { crearUsuario, eliminarUsuario, modificarUsuario, mostrarUsuario } from "../controllers/controllers.user.js";

const rutaUser = Router();

// Get sirve para mostrar datos
rutaUser.get("/user",mostrarUsuario);

// Post sirve para guardar o crear
rutaUser.post("/user",crearUsuario);

// modificar
rutaUser.put("/user",modificarUsuario);

// para borrar
rutaUser.delete("/user", eliminarUsuario);

export default rutaUser;