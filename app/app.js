import express from "express";
import { config } from "dotenv";
import rutaMain from "./routes/routes.main.js";
import rutaUser from "./routes/routes.user.js";

config();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.set("port", process.env.PORT || 3000)

// RUTAS
app.use("/",rutaMain);
app.use("/api",rutaUser);

export default app;