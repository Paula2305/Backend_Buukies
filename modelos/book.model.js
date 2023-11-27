import {model, Schema} from "mongoose";


const BookSchema = new Schema(
    {
        titulo: {
            type: String,
            required: [true, "El titulo es necesario"]
        },
        precio: {
            type: Number,
            required: [true, "El precio es necesario"]
        },
        autor: {
            type: String,
            required: [true, "El autor es necesario"]
        },
        estado: {
            type: String,
            required: [true, "El estado es necesario"]
        },
        genero: {
            type: String,
            required: [true, "El genero es necesario"]
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

