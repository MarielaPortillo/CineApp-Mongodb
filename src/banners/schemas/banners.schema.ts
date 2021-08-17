import * as mongoose from 'mongoose';
 
export const BannerSchema= new mongoose.Schema({
   
    titulo: String,
    fecha: String,
    archivo: String,
    estatus: String

   


});