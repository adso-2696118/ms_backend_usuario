"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menssa = exports.mensajeConsola = void 0;
var _colors = _interopRequireDefault(require("colors"));
var mensajeConsola = exports.mensajeConsola = function mensajeConsola(tipo, mensaje) {
  switch (tipo) {
    case "puertSuccess":
      console.log(mensaje.bgGreen);
      break;
    case "puertError":
      console.log(mensaje.bgRed);
      break;
  }
};
var menssa = exports.menssa = {
  puerto: "Backend - Ejecutandose en el puerto:"
};