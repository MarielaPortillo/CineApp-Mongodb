import { Module } from '@nestjs/common';
import { VentasboletoService } from './ventasboleto.service';
import { VentasboletoController } from './ventasboleto.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VentasboletoSchema } from './schemas/ventasboleto.schema';

@Module({


  imports:[MongooseModule.forFeature([{name:'Ventasboleto',schema:VentasboletoSchema}])],
  providers: [VentasboletoService],
  controllers: [VentasboletoController]
})
export class VentasboletoModule {}
