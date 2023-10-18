import {model, Schema} from "mongoose";


const BookSchema = new Schema(
    {
        titulo: {
            type: String
        },
        precio: {
            type: Number
        }
    }
);

export default model('Book', BookSchema);




