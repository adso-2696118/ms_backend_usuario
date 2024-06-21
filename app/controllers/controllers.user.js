/**
 * Este es el controlador de usuario
 * @module ctr-usuario
 */

import bcrypt from "bcrypt";
import { success, error } from "../message/browser.js";
import pool from "../config/db.mysql.js";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { mensajeConsola } from "../message/consola.js";
config();

/**
 * Esta funcion sirve para crear usuario nuevos
 * @param {object} req captura peticiones en HTML
 * @param {object} res envia  peticiones en HTML
 */
const crearUsuario = async(req, res)=>{
    //captura el nombre del usuario
    const nombre = req.body.nombre;
    const usuario = req.body.usuario;
    const claveSinCifrar = req.body.clave;
    try {
        const hash = await bcrypt.hash(claveSinCifrar, 2);
        const clave = hash;
        const respueta = await pool.query(`CALL sp_CrearUsuario('${nombre}', '${usuario}', '${clave}');`);
        if (respueta[0].affectedRows == 1){
            let msg = `
                Hola ${nombre}, te hemos asignado un usuario y contraseña
                para que ingrese a el sistemas eibsoft
                tu usuario sera: ${usuario}
                tu clave sera: ${claveSinCifrar}
            `;
            sendEmail(msg, usuario, "Creacion de cuenta eibsoft")
            success(req, res, 201,"Usuario creado");
        }else{
            error(req, res, 400, "No se pudo agregar el nuevo usuario");    
        }
    } catch (err) {
        error(req, res, 400, err);
    }
};
/**
 * Esta funcion sirve para mostrar usuarios
 * @param {object} req captura peticiones en HTML
 * @param {object} res envia  peticiones en HTML
 */
const mostrarUsuario = async(req, res)=>{

    let id = req.params['id'];

    try {
        const respueta = await pool.query(`CALL sp_MostrarUsuario(${id}); `);
        success(req, res, 200, respueta[0]);
    } catch (err) {
        error(req, res, 500, err)
    }
};
/**
 * Esta funcion sirve para mostrar muchos usuarios
 * @param {object} req captura peticiones en HTML
 * @param {object} res envia  peticiones en HTML
 */
const listarUsuario =async(req, res)=>{
    try {
        const respuesta = await pool.query(`CALL sp_ListarUsuario();`);
        success(req, res, 200, respuesta[0]);
    } catch (err) {
        error(req, res, 500, err)
    }
}
/**
 * Esta funcion sirve para modificar usuarios
 * @param {object} req captura peticiones en HTML
 * @param {object} res envia  peticiones en HTML
 */
const modificarUsuario = async(req, res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const usuario = req.body.usuario;
    const claveSinCifrar = req.body.clave;
    try {
        const hash = await bcrypt.hash(claveSinCifrar, 2);
        const clave = hash;
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
/**
 * Esta funcion sirve para eliminar usuarios
 * @param {object} req captura peticiones en HTML
 * @param {object} res envia  peticiones en HTML
 */
const eliminarUsuario = async(req, res)=>{
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
/**
 * Esta funcion sirve para loguearse
 * @param {object} req captura peticiones en HTML
 * @param {object} res envia  peticiones en HTML
 */
const logueoUsuario = async (req, res) => {
    const { usuario, clave } = req.body;
    // console.log(usuario+clave);
    // const hash = await bcrypt.hash(clave, 2);
    try {
        const respuesta = await pool.query(`CALL sp_BuscarUsuario('${usuario}')`);
        if (respuesta[0][0] == 0) {
            error(req, res, 404, "Usuario no existe");
            return;
        }
        const match = await bcrypt.compare(clave, respuesta[0][0][0].CLAVE);
        if(!match){
            error(req, res, 401, "Clave errada");
            return;
        }

        let payload = {
            "usuario": usuario,
            "nombre" : respuesta[0][0][0].NOMBRE
        }; 
        let token = await jwt.sign(
            payload, 
            process.env.TOKEN_PRIVATEKEY,
            {
                expiresIn : process.env.TOKEN_EXPIRES_IN
            });

        success(req, res, 200, {token});


    } catch (e) {
        error(req, res, 500, "Error en el servidor, por favor inténtalo de nuevo más tarde");
    }
}

const validarToken = (req, res) => {
    success(req, res, 200, {"token":"El token es valido"});
}

const sendEmail = async (message, receiverEmail, subject) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: "gmail",
        secure: false,
        auth: {
            user: process.env.EMAILER_CORREO,
            pass: process.env.EMAILER_CLAVE
        }
    })
    let info = await transporter.sendMail({
        from: process.env.EMAILER_CORREO,
        to: receiverEmail,
        subject: subject,
        text: message
    })
    let msg = "Se ha enviado el correo" + info.messageId
    mensajeConsola("puertSuccess", msg);
}


export {
    crearUsuario,
    mostrarUsuario,
    listarUsuario,
    modificarUsuario,
    eliminarUsuario,
    logueoUsuario,
    validarToken
}