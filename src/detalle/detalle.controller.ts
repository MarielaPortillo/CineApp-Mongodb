import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { Detalles } from './detalle.interface';
import { DetalleService } from './detalle.service';

@Controller('detalle')
export class DetalleController {

    constructor(private readonly servicio: DetalleService) {}

    @Get('/todos')
    ObtenerTodos(): Promise<Detalles[]> {
      return this.servicio.todos();
    }

    @Post('/create')
    crear(@Body() body: Detalles): Promise<Detalles> {
      return this.servicio.crear(body);
    }




    
    @Put('/editar/:id')
    actualizar(@Param('id') id,@Body() detalle:Detalles):Promise<Detalles>
    {
      const editar = this.servicio.update(id,detalle);
      console.log(editar);
      return editar;
    }
   


    @Delete('/eliminar/:id')
    delete(@Param('id') id):Promise<Detalles>
    {
      return this.servicio.delete(id);
    }



}





   
    





    
    
  
