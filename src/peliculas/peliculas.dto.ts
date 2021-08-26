import { ObjectId } from "mongoose";

export class PeliculasDTO {
    
    /*readonly Nombre: string;
    readonly Descripcion: string;
    readonly Duracion: number;
    readonly Director: string;
    readonly FechaEstreno: string;*/
    readonly titulo:String;
    readonly duracion:String;
    readonly clasificacion:String;
    readonly genero:String;
    readonly imagen:String;
    readonly estatus:String;
    readonly fechaEstreno:String;

    readonly detalle_id:ObjectId;
   
  }