import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DetalleController } from './detalle.controller';
import { DetalleService } from './detalle.service';
import { DetalleSchema } from './schemas/detalle.schema';

@Module({

  imports:[MongooseModule.forFeature([{name:'Detalle',schema:DetalleSchema}])],
  providers: [DetalleService],
  controllers: [DetalleController]
})
export class DetalleModule {}





  