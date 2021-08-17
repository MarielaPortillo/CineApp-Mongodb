import { ApiProperty } from "@nestjs/swagger";


export class Venta {
   /* @ApiProperty({
                 //descripción: 'Nombre de usuario',
    })
    CantidadBoletos: number;

    @ApiProperty({})
    Precio:number;
    @ApiProperty({})
    Fecha: string;
    @ApiProperty({})
    Hora: string;
    @ApiProperty({})
    Sala: string;
    @ApiProperty({})
    Asientos: string;
    @ApiProperty({})
    Total: number;*/
    
    @ApiProperty({})
    fecha: String;
    @ApiProperty({})
    hora:  String;
    @ApiProperty({})
    sala: String;
    @ApiProperty({})
    cantidad: String;
    @ApiProperty({})
    precio: String;
    @ApiProperty({})
    total: String;

    







   
}