import { Post } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { Banners } from './banners.interface';
import { BannersService } from './banners.service';

@Controller('banners')
export class BannersController {


    constructor(private readonly servicio: BannersService) {}

    @Get('/todos')
    ObtenerTodos(): Promise<Banners[]> {
      return this.servicio.todos();
    }

    @Post('/create')
    crear(@Body() body: Banners): Promise<Banners> {
      return this.servicio.crear(body);
    }




    
    @Put('/editar/:id')
    actualizar(@Param('id') id,@Body() banners:Banners):Promise<Banners>
    {
      return this.servicio.update(id,banners);
    }
   


    @Delete('/eliminar/:id')
    delete(@Param('id') id):Promise<Banners>
    {
      return this.servicio.delete(id);
    }


}
