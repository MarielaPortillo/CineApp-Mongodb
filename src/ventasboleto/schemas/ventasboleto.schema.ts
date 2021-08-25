import * as mongoose from 'mongoose';
 
export const VentasboletoSchema= new mongoose.Schema({
    
    NVenta: Number,
    CantidadBoletos: Number,
    Precio:Number,
    Fecha: String,
    Hora: String,
    Sala: String,
    Asientos: String,
    Total:Number,
    //Array de referencia de peliculas de venta de boletos
    pelicula_id: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Peliculas',
        }],
   
});

module.exports = mongoose.model("Ventasboleto", VentasboletoSchema);