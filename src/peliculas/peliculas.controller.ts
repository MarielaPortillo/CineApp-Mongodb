import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiHeader, ApiParam, ApiTags } from '@nestjs/swagger';
import { Pelicula } from './pelicula';
import { Peliculas } from './peliculas.interface';
import { PeliculasService } from './peliculas.service';


@ApiTags ('Peliculas')
@Controller('peliculas')
export class PeliculasController {


    constructor(private readonly servicio: PeliculasService) {}

    @Get('todas')
    ObtenerTodos(): Promise<Peliculas[]> {
      return this.servicio.todos();
    }
   
    //Schema -ventasBoletos
    @ApiCreatedResponse({
      description: 'Schema de venta-boletos Post',
      type: Pelicula,
    })
    @Post('/create')
    crear(@Body() body: Peliculas): Promise<Peliculas> {
      return this.servicio.crear(body);
    }


    @ApiHeader({
      name: 'Body de la petición',
      description: 'Body de la petición',
    })
 
    @ApiParam({name: 'id'})
    @Put('/editar/:id')
    actualizar(@Param('id') id,@Body() pelicula:Peliculas):Promise<Peliculas>
    {
      return this.servicio.update(id,pelicula);
    }
   



    @ApiParam({name: 'id'})
    @Delete('/eliminar/:id')
    delete(@Param('id') id):Promise<Peliculas>
    {
      return this.servicio.delete(id);
    }
  













}
