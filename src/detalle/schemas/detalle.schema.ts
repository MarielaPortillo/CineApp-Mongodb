import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

 
export const DetalleSchema= new mongoose.Schema({
  
   id:Object,
   director: String,
   actores: String,
   sinopsis: String,
   //trailer: String,

   


});

//const detalle = mongoose.model('detalle', DetalleSchema);
