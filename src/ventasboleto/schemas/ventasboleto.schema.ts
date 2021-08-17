import * as mongoose from 'mongoose';
 
export const VentasboletoSchema= new mongoose.Schema({
    
   /* NVenta: Number,
    CantidadBoletos: Number,
    Precio:Number,
    Fecha: String,
    Hora: String,
    Sala: String,
    Asientos: String,
    Total:Number,
    //Array de referencia de peliculas de venta de boletos
    Pelicula_id: Array*/

    fecha: String,
    hora:  String,
    sala: String,
    cantidad: String,
    precio: String,
    total: String,

    pelicula_id: Array



   
});
