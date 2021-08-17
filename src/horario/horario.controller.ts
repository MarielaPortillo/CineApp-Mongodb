import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Pelicula } from 'src/peliculas/pelicula';
import { Horario } from './horario.interface';
import { HorarioService } from './horario.service';
import { horarioSchema } from './schemas/horario.schema';

@Controller('horario')
export class HorarioController {

    constructor(private readonly servicio: HorarioService) {}

      

   /* @Get()
    ObtenerTodos(): Promise<Horario[]> {
     
      return this.servicio.todos();
      
    }*/

    @Get()
    ObtenerTodos(horario): Promise<Horario[]> {
     

      //horario.populate(Pelicula, { path: "Pelicula" });
      
      return this.servicio.todos();
                  
    }

    










    


    @Post()
    crear(@Body() body: Horario): Promise<Horario> {
      return this.servicio.crear(body);
    }




    
    @Put(':id')
    actualizar(@Param('id') id,@Body() horario:Horario):Promise<Horario>
    {
      return this.servicio.update(id,horario);
    }
   


    @Delete(':id')
    delete(@Param('id') id):Promise<Horario>
    {
      return this.servicio.delete(id);
    }





}
