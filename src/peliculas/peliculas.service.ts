import { Injectable } from '@nestjs/common';
import { ErrorHttpStatusCode } from '@nestjs/common/utils/http-error-by-code.util';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pelicula } from './pelicula';
import { PeliculasDTO } from './peliculas.dto';
import { Peliculas } from './peliculas.interface';
import { PeliculasModule } from './peliculas.module';
import { PeliculaSchema } from './schemas/peliculas.schema';

@Injectable()
export class PeliculasService {


    constructor(@InjectModel('Peliculas') private readonly peliculasModel:Model<Peliculas>){}

    async todos():Promise<Peliculas[]> {

      
      
        return await this.peliculasModel.find();
      }

        //metodo para mostrar las peliculas en cartelera
     async activas():Promise<Peliculas[]> { 
        
          return await this.peliculasModel.find({estatus:"Activa"});
        
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



