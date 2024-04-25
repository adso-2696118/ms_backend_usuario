import { Router } from "express";
import { success } from "../message/browser.js";

const rutaUser = Router();

// Get sirve para mostrar datos
rutaUser.get("/user",(req, res)=>{
    success(req, res, 200,"Conectao con usuario");
});

// Post sirve para guardar o crear
rutaUser.post("/user",(req, res)=>{

    const dato = req.body;
    console.log(dato);

    success(req, res, 200,"post Ha ingresado un dato");
});

export default rutaUser;