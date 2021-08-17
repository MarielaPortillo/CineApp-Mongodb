import * as mongoose from 'mongoose';
 
export const DetalleSchema= new mongoose.Schema({
   director: String,
   actores: String,
   sinopsis: String,
   trailer: String,

   


});