import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HorarioController } from './horario.controller';
import { HorarioService } from './horario.service';
import { horarioSchema } from './schemas/horario.schema';

@Module({
  
  imports:[MongooseModule.forFeature([{name:'Horario',schema:horarioSchema}])],
  controllers: [HorarioController],
  providers: [HorarioService],
})
export class HorarioModule {}


