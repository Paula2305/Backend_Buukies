import User from "../modelos/user.model.js"

export const createUser = async (req,res) => {

    try{
        const email = req.body.email;
        const usuarioExistente = await User.findOne({email});
        if(usuarioExistente){
            return res.status(400).json({message: 'Email ya registrado '});
        }

        const user = new User(req.body);
        await user.save();
        return res.status(201).json({ message: req.body });
    }catch(error){
        console.log('Error creating user', error);
        return res.status(500).json({ error: 'An error occurred while creating the user.' });
    }
}








