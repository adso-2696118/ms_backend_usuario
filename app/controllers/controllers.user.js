import { success, error } from "../message/browser.js";
import pool from "../config/db.mysql.js";

export const crearUsuario = async(req, res)=>{
    const nombre = req.body.nombre;
    const usuario = req.body.usuario;
    const claveSinCifrar = req.body.clave;
    const clave = claveSinCifrar;
    try {
        const respueta = await pool.query(`CALL sp_CrearUsuario('${nombre}', '${usuario}', '${clave}');`);
        if (respueta[0].affectedRows == 1){
            success(req, res, 201,"Usuario creado");
        }else{
            error(req, res, 400, "No se pudo agregar el nuevo usuario");    
        }
    } catch (err) {
        error(req, res, 400, err);
    }
};
export const mostrarUsuario = async(req, res)=>{

    let id = req.params['id'];

    try {
        const respueta = await pool.query(`CALL sp_MostrarUsuario(${id}); `);
        success(req, res, 200, respueta[0]);
    } catch (err) {
        error(req, res, 500, err)
    }
};
export const listarUsuario =async(req, res)=>{
    try {
        const respueta = await pool.query(`CALL sp_ListarUsuario();`);
        success(req, res, 200, respueta[0]);
    } catch (err) {
        error(req, res, 500, err)
    }
}
export const modificarUsuario = async(req, res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const usuario = req.body.usuario;
    const claveSinCifrar = req.body.clave;
    const clave = claveSinCifrar;
    try {
        const respueta = await pool.query(`CALL sp_ModificarUsuario(${id}, '${nombre}', '${usuario}', '${clave}');`);
        if (respueta[0].affectedRows == 1){
            success(req, res, 201,"Usuario modificado:"+ usuario);
        }else{
            error(req, res, 400, "No se pudo modificar el usuario: "+usuario);    
        }
    } catch (err) {
        error(req, res, 400, err);
    }
};
export const eliminarUsuario = async(req, res)=>{
    const id = req.body.id;
    try {
        const respueta = await pool.query(`CALL  sp_EliminarUsuario(${id});`);
        if (respueta[0].affectedRows == 1){
            success(req, res, 201,"Usuario eliminado:");
        }else{
            error(req, res, 400, "No se pudo eliminar el usuario: ");    
        }
    } catch (err) {
        error(req, res, 400, err);
    }
};