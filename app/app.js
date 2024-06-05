import express from "express";
import { config } from "dotenv";
import cors from "cors";
import ruta from "./routes/index.js";

config();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cors());

app.set("port", process.env.PORT || 3000)

// RUTAS
app.use("/", ruta);

export default app;