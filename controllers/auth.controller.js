import User from "../modelos/user.model.js";
import bcrypt from 'bcryptjs';

export const signUp = async (req,res) => {
    try{
        const verificarEmail = req.body.email;
        const usuarioExistente = await User.findOne({email: verificarEmail});
        if(usuarioExistente){
            return res.status(400).json({message: "Failed! Email is already in use!"});
        }
        const user = new User({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            password: bcrypt.hashSync(req.body.password,8),
            email: req.body.email,
            direccion: req.body.direccion,
            telefono: req.body.telefono
        });
        await user.save();
        return res.status(201).json({ message: "Usuario creado correctamente" });
    }catch(error){
        res.status(500).json({error: 'An error ocurred while creating the user'});
    }
}