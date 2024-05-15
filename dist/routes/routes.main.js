"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _browser = require("../message/browser.js");
var rutaMain = (0, _express.Router)();
rutaMain.get("/", function (req, res) {
  res.json({
    "respuesta": _browser.messageBrowse.principal
  });
});
rutaMain.get("/home", function (req, res) {
  res.json({
    "home": _browser.messageBrowse.home
  });
});
rutaMain.get("/galery", function (req, res) {
  res.json({
    "galery": _browser.messageBrowse.galery
  });
});
rutaMain.get("/about", function (req, res) {
  res.json({
    "about": _browser.messageBrowse.about
  });
});
rutaMain.get("/contact", function (req, res) {
  res.json({
    "contact": _browser.messageBrowse.contact
  });
});
var _default = exports["default"] = rutaMain;