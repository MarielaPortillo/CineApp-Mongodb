import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Banners } from './banners.interface';

@Injectable()
export class BannersService {

    constructor(@InjectModel('Banners') private readonly bannerModel:Model<Banners>){}

    async todos():Promise<Banners[]> {
        return await this.bannerModel.find();
      }

      async crear(banners:Banners):Promise<Banners>{
        const nuevo= new this.bannerModel(banners);
        return await nuevo.save();
      }
    
      async update(id:string, banners:Banners):Promise<Banners>
      {
        return await this.bannerModel.findByIdAndUpdate(id,banners,{new:true});
      }
       
      async delete(id:string):Promise<Banners>
      {
        return await this.bannerModel.findByIdAndRemove(id);
      }



}
