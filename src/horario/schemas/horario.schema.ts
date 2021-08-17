import * as mongoose from 'mongoose';
//import { Schema } from 'mongoose';


;
 
export const horarioSchema= new mongoose.Schema({
    

    fecha: String,
    hora:  String,
    sala: String,
    precio: String,

    //pelicula_id: Array
    //pelicula_id: { type: Schema., ref: "Peliculas" }
    //pelicula_id: { type: mongoose.SchemaTypes.ObjectId, ref: "Peliculas" }
    //pelicula_id: { type: mongoose.SchemaTypes.ObjectId,ref: "Peliculas" }

    pelicula_id: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Pelicula',
        }],
   
});


module.exports = mongoose.model("Horario", horarioSchema);