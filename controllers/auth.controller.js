import User from "../modelos/user.model.js";
import bcrypt from 'bcryptjs';
import {TOKEN_SECRET} from '../config/jwt.config.js'
import jwt from 'jsonwebtoken'

export const signUp = async (req, res) => {
    try {
        const verificarEmail = req.body.email;
        const usuarioExistente = await User.findOne({email: verificarEmail});
        if (usuarioExistente) {
            return res.status(400).json({message: "Failed! Email is already in use!"});
        }
        const user = new User({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            password: bcrypt.hashSync(req.body.password, 8),
            email: req.body.email,
            direccion: req.body.direccion,
            telefono: req.body.telefono
        });
        await user.save();
        return res.status(201).json({message: "Usuario creado correctamente"});
    } catch (error) {
        res.status(500).json({error: 'An error ocurred while creating the user'});
    }
}

export const login = async (req,res) =>{
    try{
        const verificarEmail = req.body.email;
        const usuario = await User.findOne({email: verificarEmail});
        const verificarPassword = req.body.password;
        

        if(usuario === null){
            throw res.status(404).json({message: 'Invalid mail'})
        }

        const passwordCompared = await comparePassword(verificarPassword, usuario.password)

        if(!passwordCompared){
            throw res.status(404).json({message: 'Incorrect password'})
        }

        const token = jwt.sign({
            name: usuario.name,
            id: usuario.id
        }, TOKEN_SECRET)

        return res.header('auth-token', token).json({
            data: {token},
            usuarioRest
        }).status(200)

    } catch (error){
        res.status(500);
    }
}

async function comparePassword(plaintextPassword, hash) {
    const result = await bcrypt.compare(plaintextPassword, hash);
    return result;
}
