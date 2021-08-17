import { ObjectId } from "mongoose";

export class PeliculasDTO {
    
    /*readonly Nombre: string;
    readonly Descripcion: string;
    readonly Duracion: number;
    readonly Director: string;
    readonly FechaEstreno: string;*/



    
   titulo: String;
   duracion: String;
   clasificacion: String;
   genero: String;
   imagen: String;
   estatus:String;
   fechaEstreno:String; 

   detalle_id: ObjectId;

   
  }