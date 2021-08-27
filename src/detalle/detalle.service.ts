import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Detalles } from './detalle.interface';

@Injectable()
export class DetalleService {


    constructor(@InjectModel('Detalle') private readonly detallesModel:Model<Detalles>){}

    async todos():Promise<Detalles[]> {
        return await this.detallesModel.find();
      }

      async crear(detalle:Detalles):Promise<Detalles>{
        const nuevo= new this.detallesModel(detalle);
        return await nuevo.save();
      }
    
      async update(id:string, detalle:Detalles):Promise<Detalles>
      {
        return await this.detallesModel.findByIdAndUpdate(id, detalle);
      }
       
      async delete(id:string):Promise<Detalles>
      {
        return await this.detallesModel.findByIdAndDelete(id);
      }
}



