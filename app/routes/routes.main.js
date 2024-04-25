import { Router } from "express";
import {messageBrowse} from "../message/browser.js";

const rutaMain = Router();

rutaMain.get("/", (req, res)=>{
    res.json({"respuesta": messageBrowse.principal})
})

rutaMain.get("/home", (req, res)=>{
    res.json({"home": messageBrowse.home})
})

rutaMain.get("/galery", (req, res)=>{
    res.json({"galery": messageBrowse.galery})
})

rutaMain.get("/about", (req, res)=>{
    res.json({"about": messageBrowse.about})
})

rutaMain.get("/contact", (req, res)=>{
    res.json({"contact": messageBrowse.contact})
})

export default rutaMain;