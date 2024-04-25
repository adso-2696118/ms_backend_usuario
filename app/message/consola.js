import colors from "colors";

export const mensajeConsola = (tipo, mensaje)=>{
    switch (tipo){
        case "puertSuccess":
            console.log(mensaje.bgGreen);
        break;
        case "puertError":
            console.log(mensaje.bgRed);
        break;
    }
}
export const menssa = {
    puerto:"Ejecutandose en el puerto:",
}