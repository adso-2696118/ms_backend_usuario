import express from "express";
import { config } from "dotenv";
import {messageBrowse} from "./message/browser.js";
config();

const app = express();
app.set("port", process.env.PORT || 3000)

app.get("/", (req, res)=>{
    res.json({"respuesta": messageBrowse.principal})
})
app.get("/home", (req, res)=>{
    res.json({"home": messageBrowse.home})
})
app.get("/galery", (req, res)=>{
    res.json({"galery": messageBrowse.galery})
})
app.get("/about", (req, res)=>{
    res.json({"about": messageBrowse.about})
})
app.get("/contact", (req, res)=>{
    res.json({"contact": messageBrowse.contact})
})

export default app;