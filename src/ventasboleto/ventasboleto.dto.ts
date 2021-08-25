import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "mongoose";

export class VentasboletoDTO {
    
    @ApiProperty()
    readonly NVenta: number;
    
    readonly CantidadBoletos: Number;
    
    readonly Precio:Number;
   
    readonly Fecha: string;
    
    readonly Hora: string;
  
    readonly Sala: string;
    
    readonly Asientos: string;
    
    readonly Total: Number;
    //Array de referencia de peliculas de venta de boletos
    readonly Pelicula_id:ObjectId;

   
  }