import app from "./app.js";
import { mensajeConsola, menssa } from "./message/consola.js";

app.listen(app.get("port"), ()=>{
    mensajeConsola("puertSuccess", 
    `${menssa.puerto} ${app.get("port")} http://localhost:${app.get("port")}`)
})