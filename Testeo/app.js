import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { test1 } from "./backend/controllers/alumnos.controller.js"; // tenia el test1 como test

dotenv.config();

mongoose.connect(process.env.urlbase)
    .then(() => {
        console.log("jala esta madre")
    })
    .catch((error) => {
        console.log("no funciona esta madre ", error)
    })

const app = express();

app.use(cors());

app.listen(4000, () => {
    console.log("Se escucha correcto, no escucha borroso")
});


test1(); // solo le puse el uno a la llamada del metodo