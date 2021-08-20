import { ApiProperty } from "@nestjs/swagger";


export class Pelicula {
  static populate(Horario: any, arg1: { path: string; }, arg2: (err: any, Pelicula: any) => void): Promise<import("../horario/horario.interface").Horario[]> {
    throw new Error('Method not implemented.');
  }
    

   /* @ApiProperty({})
    Nombre: String;
    @ApiProperty({})
    Descripcion: String;
    @ApiProperty({})
    Duracion: Number;
    @ApiProperty({})
    Director: String;
    @ApiProperty({})
    FechaEstreno: String;*/


   
   titulo: String;
   duracion: String;
   clasificacion: String;
   genero: String;
   imagen: String;
   estatus:String='Activa';
   fechaEstreno:String;





    
   
}