import { ApiProperty } from "@nestjs/swagger";


export class Pelicula {
    

    @ApiProperty({})
    Nombre: String;
    @ApiProperty({})
    Descripcion: String;
    @ApiProperty({})
    Duracion: Number;
    @ApiProperty({})
    Director: String;
    @ApiProperty({})
    FechaEstreno: String;
    
   
}