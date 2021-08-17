import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeliculasService } from './peliculas/peliculas.service';

import { MongooseModule } from '@nestjs/mongoose';
import { PeliculasModule } from './peliculas/peliculas.module';
import { VentasboletoModule } from './ventasboleto/ventasboleto.module';
import { DetalleService } from './detalle/detalle.service';
import { DetalleModule } from './detalle/detalle.module';
import { HorarioService } from './horario/horario.service';
import { HorarioModule } from './horario/horario.module';
import { BannersService } from './banners/banners.service';
import { BannersModule } from './banners/banners.module';




@Module({
  //conexion local
  imports: [PeliculasModule,DetalleModule,HorarioModule,BannersModule,VentasboletoModule,MongooseModule.forRoot('mongodb://localhost:27017/cineApp')],

  //conexion remota                                                
  //imports: [PeliculasModule,VentasboletoModule,MongooseModule.forRoot('mongodb+srv://ruth1:1234@cluster0.u1fwz.mongodb.net/CineApp?retryWrites=true&w=majority')],
  //imports: [PeliculasModule,VentasboletoModule,MongooseModule.forRoot('mongodb+srv://ruth1:iOxfn6kR0CSAC6cN@cluster0.u1fwz.mongodb.net/CineApp?retryWrites=true&w=majority')],
  controllers: [AppController],                                                                         
  providers: [AppService],
})

export class AppModule {}

