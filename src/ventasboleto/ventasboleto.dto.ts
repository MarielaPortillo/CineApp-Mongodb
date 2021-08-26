import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "mongoose";

export class VentasboletoDTO {
    
    @ApiProperty()
    readonly NVenta: number;
    
     
    readonly fecha: String;
    readonly hora: String;
    readonly sala: String;
    readonly cantidad: String;
    readonly precio:String;
    //Asientos: String,
    readonly total:String;
    //Array de referencia de peliculas de venta de boletos
   
    //Array de referencia de peliculas de venta de boletos
    readonly Pelicula_id:ObjectId;

   
  }