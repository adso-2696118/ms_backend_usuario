"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllersUser = require("../controllers/controllers.user.js");
var _oauth = require("../middlewares/oauth.js");
var rutaUser = (0, _express.Router)();

// Get sirve para mostrar usuarios
rutaUser.get("/user/:id", _controllersUser.mostrarUsuario);
// Get sirve para mostrar todos los usuarios
rutaUser.get("/user", _controllersUser.listarUsuario);

// Post sirve para guardar o crear
rutaUser.post("/user", _oauth.verifyToken, _controllersUser.crearUsuario);

// modificar
rutaUser.put("/user", _oauth.verifyToken, _controllersUser.modificarUsuario);

// para borrar
rutaUser["delete"]("/user", _oauth.verifyToken, _controllersUser.eliminarUsuario);

// para loguearse
rutaUser.post("/login", _controllersUser.logueoUsuario);
var _default = exports["default"] = rutaUser;