import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BannersController } from './banners.controller';
import { BannersService } from './banners.service';
import { BannerSchema } from './schemas/banners.schema';

@Module({

  imports:[MongooseModule.forFeature([{name:'Banners',schema:BannerSchema}])],
  providers: [BannersService],
  controllers: [BannersController]
})
export class BannersModule {}







