import { ObjectId } from "mongoose";

export interface Ventasboleto {
    Id?: number;
   
    /*
    NVenta: number;
    CantidadBoletos: number;
    Precio:number;
    Fecha: string;
    Hora: string;
    Sala: string;
    Asientos: string;
    Total: number;
    //Array de referencia de peliculas de venta de boletos
    Pelicula_id:ObjectId*/


    fecha: String;
    hora:  String;
    sala: String;
    cantidad: String;
    precio: String;
    total: String;

    pelicula_id: ObjectId




}