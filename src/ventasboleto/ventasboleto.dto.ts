import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "mongoose";

export class VentasboletoDTO {
    
    @ApiProperty()
   /* readonly NVenta: number;
    
    readonly CantidadBoletos: Number;
    
    readonly Precio:Number;
   
    readonly Fecha: string;
    
    readonly Hora: string;
  
    readonly Sala: string;
    
    readonly Asientos: string;
    
    readonly Total: Number;
    //Array de referencia de peliculas de venta de boletos
    readonly Pelicula_id:ObjectId;*/




    /*readonly fecha: String;
    readonly hora:  String;
    readonly sala: String;
    readonly cantidad: String;
    readonly precio: String;
    readonly total: String;
    readonly pelicula_id: ObjectId;*/

     fecha: String;
    hora:  String;
    sala: String;
     cantidad: String;
     precio: String;
     total: String;
     pelicula_id: ObjectId;










   
  }