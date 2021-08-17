import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiHeader, ApiParam, ApiTags } from '@nestjs/swagger';
import { Pelicula } from './pelicula';
import { Peliculas } from './peliculas.interface';
import { PeliculasService } from './peliculas.service';


@ApiTags ('Peliculas')
@Controller('peliculas')
export class PeliculasController {


    constructor(private readonly servicio: PeliculasService) {}

    @Get()
    ObtenerTodos(): Promise<Peliculas[]> {
      return this.servicio.todos();
    }
   
    /*@Get()
    Obteneractivas( pelicula:Peliculas): Promise<Peliculas[]> {
       
      pelicula.estatus='Activa';
      
      return this.servicio.activas(pelicula);
    }*/






    //Schema -ventasBoletos
    @ApiCreatedResponse({
      description: 'Schema de venta-boletos Post',
      type: Pelicula,
    })




    @Post()
    crear(@Body() body: Peliculas): Promise<Peliculas> {
      return this.servicio.crear(body);
    }


    @ApiHeader({
      name: 'Body de la petición',
      description: 'Body de la petición',
    })

    @ApiParam({name: 'id'})
    @Put(':id')
    actualizar(@Param('id') id,@Body() pelicula:Peliculas):Promise<Peliculas>
    {
      return this.servicio.update(id,pelicula);
    }
   



    @ApiParam({name: 'id'})
    @Delete(':id')
    delete(@Param('id') id):Promise<Peliculas>
    {
      return this.servicio.delete(id);
    }
  













}
