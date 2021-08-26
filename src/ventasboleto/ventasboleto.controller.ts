import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiHeader, ApiParam, ApiProperty, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Console } from 'console';
import { Model } from 'mongoose';
import { totalmem } from 'os';
import { VentasboletoSchema } from './schemas/ventasboleto.schema';
import { Venta } from './venta';
import { VentasboletoDTO } from './ventasboleto.dto';
import { Ventasboleto } from './ventasboleto.interface';
import { VentasboletoService } from './ventasboleto.service';


@ApiTags ('VentasBoletos')
@Controller('ventasboleto')
export class VentasboletoController {
   
    //inyeccion del servicio ventasboleto.service
    constructor(private readonly servicio: VentasboletoService) {}
        

    @Get('/todas')
    ObtenerTodos(): Promise<Ventasboleto[]> {
      return this.servicio.todos();
    }
   
    //Schemas
    @ApiCreatedResponse({
      description: 'Schema de venta-boletos Post',
      type: Venta,
    })


    @ApiHeader({
      name: 'Asientos',
      description: 'Asientos',
    })

    @ApiHeader({
      name: 'Total',
      description: 'Total',
    })

    @ApiHeader({
      name: 'Sala',
      description: 'Sala',
    })

    @ApiHeader({
      name: 'Hora',
      description: 'Hora',
    })

   @ApiHeader({
      name: 'Fecha',
      description: 'Fecha',
    })
  
    @ApiHeader({
      name: 'Precio',
      description: 'Precio',
    })
    @ApiHeader({
      name: 'CantidadBoletos',
      description: 'Cantidad de boletos',
    })
    @Post('/create')
    @ApiHeader({
      name: 'NVentas',
      description: 'Numero de ventas',
    })

    
    crear(@Body() body: Ventasboleto): Promise<Ventasboleto> {
    
      return this.servicio.crear(body);
    }
  

  
    @ApiHeader({
      name: 'Body de la petición',
      description: 'Body de la petición',
    })
    
    @ApiParam({name: 'id'})


    @Put('/editar/:id')
    actualizar(@Param('id') id,@Body() ventasboleto:Ventasboleto):Promise<Ventasboleto>
    {
      return this.servicio.update(id,ventasboleto);
    }
    

    @ApiParam({name: 'id'})
    @Delete('/eliminar/:id')
    delete(@Param('id') id):Promise<Ventasboleto>
    {
      return this.servicio.delete(id);
    }
  
}
