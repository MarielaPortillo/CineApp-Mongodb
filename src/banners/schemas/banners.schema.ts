import * as mongoose from 'mongoose';
import { identity } from 'rxjs';
 
export const BannerSchema= new mongoose.Schema({
   
    id:Object,
    titulo: String,
    fecha: String,
    archivo: String,
    estatus: String

   


});