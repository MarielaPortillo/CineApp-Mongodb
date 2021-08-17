import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "mongoose";

export class HorarioDTO {
  

     fecha: String;
    hora:  String;
    sala: String;
     precio: String;
     pelicula_id: ObjectId;

   
  }