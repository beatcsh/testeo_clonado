//COMO Y EL DONDE SE GUARDAN LOS DATOS
import{Schema, model} from "mongoose"; // aqui tenia mal escrito mongoose y Schema con minusculas
 
const Eschema = new Schema({ // al principio decia Eschemas
    name:{
        type:String
    },
    edad:{ // le quite la mayuscula
        type:Number
    }
})
export const Modelo = new model("Tabla de alumnos", Eschema)