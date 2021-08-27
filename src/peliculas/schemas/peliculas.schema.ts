import * as mongoose from 'mongoose';
 
export const PeliculaSchema= new mongoose.Schema({
    //Nombre: String,
    //Descripcion: String,
    //Duracion: Number,
    //Director: String,
    //FechaEstreno: String,
    titulo:String, 
    duracion:String,
    clasificacion:String,
    genero:String,
    imagen:String,
    estatus:String,
    fechaEstreno:String,

    detalle_id: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Detalle',
        }],
   
});

module.exports = mongoose.model("Peliculas", PeliculaSchema);

