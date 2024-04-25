import app from "./app/app.js";
import { mensajeConsola, menssa } from "./app/message/consola.js";

app.listen(app.get("port"), ()=>{
    mensajeConsola("puertSuccess", 
    `${menssa.puerto} ${app.get("port")}`)
})