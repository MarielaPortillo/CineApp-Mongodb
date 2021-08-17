import { ObjectId } from "mongoose";

export interface Horario {


    fecha: String;
    hora:  String;
    sala: String;
    precio: String;
  

    pelicula_id: String

}
