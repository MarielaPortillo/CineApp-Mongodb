import { ObjectId } from "mongoose";

export interface Peliculas {
    Id?: number;
    /*Nombre: string;
    Descripcion: string;
    Duracion: number;
    Director: string;
    FechaEstreno: string;*/
   
    
   titulo: String,
   duracion: String,
   clasificacion: String,
   genero: String,
   imagen: String,
   estatus: String,
   fechaEstreno:String,

   pelicula_id: ObjectId



}
