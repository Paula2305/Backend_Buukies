import {model, Schema} from "mongoose";

const UserSchema = new Schema(
    {
        nombre: {
            type: String
        },
        apellido:{
            type:String
        },
        email:{
            type:String,
            unique:true
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