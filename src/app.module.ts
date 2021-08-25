import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeliculasService } from './peliculas/peliculas.service';

import { MongooseModule } from '@nestjs/mongoose';
import { PeliculasModule } from './peliculas/peliculas.module';
import { VentasboletoModule } from './ventasboleto/ventasboleto.module';
import { HorarioModule } from './horario/horario.module';
import { BannersModule } from './banners/banners.module';
import { DetalleModule } from './detalle/detalle.module';


const cluster = 'mongodb+srv://admin:aCemwwu8Mfax04un@cluster0.u1fwz.mongodb.net/CineApp?retryWrites=true&w=majority';


@Module({
  //conexion local
  //imports: [PeliculasModule,VentasboletoModule,MongooseModule.forRoot('mongodb://localhost:27017/cinneApp')],

  //conexion remota                                                
      imports: [PeliculasModule,DetalleModule,HorarioModule,BannersModule,VentasboletoModule, MongooseModule.forRoot(cluster)],

    controllers: [AppController],                                                                         
  providers: [AppService],
})

export class AppModule {}

