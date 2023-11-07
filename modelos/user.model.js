import {model, Schema} from "mongoose";

const UserSchema = new Schema(
    {
        nombre: {
            type: String,
            required: [true, "El nombre es necesario"]
        },
        apellido:{
            type:String
        },
        password:{
            type: String,
            required: [true, "La contraseña es obligatoria"]
        },
        email:{
            type:String,
            unique:true,
            required: [true, "El email es obligatorio"]
        },
        direccion:{
            type:String
        },
        telefono:{
            type:String
        }

    }
)

export default model('User', UserSchema)