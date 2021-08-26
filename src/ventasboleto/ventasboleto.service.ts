import { Injectable, PreconditionFailedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Console } from 'console';
import { Model } from 'mongoose';
import { totalmem } from 'os';
import { VentasboletoSchema } from './schemas/ventasboleto.schema';
import { Ventasboleto } from './ventasboleto.interface';

@Injectable()
export class VentasboletoService {
    constructor(@InjectModel('Ventasboleto') private readonly ventasboletoModel:Model<Ventasboleto>){}
    async todos():Promise<Ventasboleto[]> {
      
        return await this.ventasboletoModel.find().populate({path: 'pelicula_id', model:'Peliculas'});
      }
     
      async uno(id:string):Promise<Ventasboleto> {
        return await this.ventasboletoModel.findOne({_id:id});
      }
     
      async crear(ventasboleto:Ventasboleto):Promise<Ventasboleto>{
        const nuevo= new this.ventasboletoModel(ventasboleto);
        return await nuevo.save();
      }
    
      async update(id:string, ventasboleto:Ventasboleto):Promise<Ventasboleto>
      {
        return await this.ventasboletoModel.findOneAndUpdate(ventasboleto,{new:true});
      }
       
      async delete(id:string):Promise<Ventasboleto>
      {
        return await this.ventasboletoModel.findOneAndDelete();
      }











}
