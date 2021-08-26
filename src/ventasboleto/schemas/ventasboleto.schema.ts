import * as mongoose from 'mongoose';
 
export const VentasboletoSchema= new mongoose.Schema({
    
    id:Object,
    //NVenta: Number,
    
    fecha: String,
    hora: String,
    sala: String,
    cantidad: String,
    precio:String,
    //Asientos: String,
    total:String,
    //Array de referencia de peliculas de venta de boletos
    pelicula_id: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Peliculas',
        }],
   
});

module.exports = mongoose.model("Ventasboleto", VentasboletoSchema);