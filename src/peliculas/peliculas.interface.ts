import { ObjectId } from "mongoose";

export interface Peliculas {
    _id?: String;
    titulo:String, 
    duracion:String,
    clasificacion:String,
    genero:String,
    imagen:String,
    estatus:String,
    fechaEstreno:String,

    detalle_id:ObjectId
   


}
