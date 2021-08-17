import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PeliculasController } from './peliculas.controller';
import { PeliculasService } from './peliculas.service';
import { PeliculaSchema } from './schemas/peliculas.schema';



@Module({
imports:[MongooseModule.forFeature([{name:'Peliculas',schema:PeliculaSchema}])],
providers: [PeliculasService],
controllers: [PeliculasController],

})


export class PeliculasModule {}
