import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pelicula } from 'src/peliculas/pelicula';
import { Horario } from './horario.interface';
import { horarioSchema } from './schemas/horario.schema';

@Injectable()
export class HorarioService {

    constructor(@InjectModel('Horario') private readonly horarioModel:Model<Horario>){}






    /*async todos():Promise<Horario[]> {

    
        return await this.horarioModel.find();
      }*/

      async todos():Promise<Horario[]> {

       
        return await this.horarioModel.find().populate({path: 'pelicula'})
               //.populate({ path: 'Pelicula'})
               //.exec();

             

               
      }





      async crear(horario:Horario):Promise<Horario>{
        const nuevo= new this.horarioModel(horario);
        return await nuevo.save();
      }
    
      async update(id:string, horario:Horario):Promise<Horario>
      {
        return await this.horarioModel.findByIdAndUpdate(id,horario,{new:true});
      }
       
      async delete(id:string):Promise<Horario>
      {
        return await this.horarioModel.findByIdAndRemove(id);
      }





}
