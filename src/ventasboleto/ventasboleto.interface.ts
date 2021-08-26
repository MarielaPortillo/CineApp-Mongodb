import { ObjectId } from "mongoose";

export interface Ventasboleto {
    Id?: number;
   
    
    
    fecha: String,
    hora: String,
    sala: String,
    cantidad: String,
    precio:String,
    total:String,

    //Array de referencia de peliculas de venta de boletos
    Pelicula_id:ObjectId





}
