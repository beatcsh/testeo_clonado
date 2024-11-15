import { Modelo } from "../models/alumnos.model.js"; // aqui no tenia el .js y Modelo estaba con minusculas
 
Modelo.create({ // tenia el Modelo con minusculas
    name:"Rodolfo", // tenia una mayuscula al inicio
    edad:25
})

export const test1 = ()=>{
    console.log("Funciona el controlador")
}