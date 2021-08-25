import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Peliculas } from './peliculas.interface';

@Injectable()
export class PeliculasService {


    constructor(@InjectModel('Peliculas') private readonly peliculasModel:Model<Peliculas>){}

    async todos():Promise<Peliculas[]> {
        return await this.peliculasModel.find().populate({path:'detalle_id', Model:'Detalles'});
      }
     
      async uno(id:string):Promise<Peliculas> {
        return await this.peliculasModel.findOne({_id:id});
      }
     
      async crear(peliculas:Peliculas):Promise<Peliculas>{
        const nuevo= new this.peliculasModel(peliculas);
        return await nuevo.save();
      }
    
      async update(id:string, peliculas:Peliculas):Promise<Peliculas>
      {
        return await this.peliculasModel.findByIdAndUpdate(id,peliculas,{new:true});
      }
       
      async delete(id:string):Promise<Peliculas>
      {
        return await this.peliculasModel.findByIdAndRemove(id);
      }
      



}



