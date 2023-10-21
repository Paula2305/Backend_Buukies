import {model, Schema} from "mongoose";


const BookSchema = new Schema(
    {
        titulo: {
            type: String
        },
        precio: {
            type: Number
        },
        autor: {
            type: String
        },
        estado: {
            type: String
        },
        genero: {
            type: String
        },
        idioma: {
            type: String
        },
        sinopsis: {
            type: String
        },
        foto: {
            type: String
        }
    }
);

export default model('Book', BookSchema);

