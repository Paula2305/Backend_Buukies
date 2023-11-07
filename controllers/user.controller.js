import User from "../modelos/user.model.js"

export const createUser = async (req,res) => {

    try{
        const email = req.body.email;
        const usuarioExistente = await User.findOne({email});
        if(usuarioExistente){
            return res.status(400).json({message: 'Email already registered '});
        }

        const user = new User(req.body);
        await user.save();
        return res.status(201).json({ message: "Usuario creado correctamente" });
    }catch(error){
        console.log('Error creating user:', error);
        return res.status(500).json({ error: 'An error occurred while creating the user.' });
    }
}

export const getAllUsers = async (req,res) => {
    try{
        const allUsers = await User.find();
        return res.status(200).json(allUsers);
    }catch(error){
        console.log('Error fetching users:',error);
        return res.status(500).json({ error: 'An error occurred while fetching users.' });
    }
}

export const getUserById = async (req,res) => {
    try{
        const id = req.params.id; // traigo el id por parametro
        const user = await User.findOne({_id:id});
        return res.status(200).json(user);
    }catch(error){
        console.log('Error fetching user:', error);
        return res.status(500).json({error: 'An error occurred while fetching user.'})
    }
}

export const deleteUserById = async (req,res) =>{
    try{
        const id = req.params.id;
        await User.deleteOne({_id:id});
        return res.sendStatus(204).json({message: 'User deleted'});
    }catch(error){
        console.error('Error deleting book:', error);
        return res.status(404).send('Error deleting book');
    }
}

export const updateUser = async (req, res) => {
    try{
        const filter = {_id: req.params.id};
        const update = req.body;
        await User.updateOne(filter, update);
        return res.sendStatus(204);
    }catch(error){
        console.log(('Error updating user', error));
        return res.status(404).send({error: 'An error ocurred while updating user'});
    }
}







