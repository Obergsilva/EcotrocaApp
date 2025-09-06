const {getAllUsers, getUserById, addUser, updateUser, deleteUser} = require('../models/userModel');

const getAllUsersHandler = async(req, res) =>{
    try{
        const usuarios = await getAllUsers();
        res.status(200).json(usuarios);
    }

    catch(error){
        res.status(500).json({error: error.message || "Erro ao buscar usuários"});
    }

}

const getUserByIdHandler = async(req, res) => {
    const id = parseInt(req.params.id);

    try{
        const usuario = await getUserById(id);

        if(!usuario){
            return res.status(404).json({error: "Usuário não encontrado"});
        }

        res.status(200).json(usuario);
    }

    catch(error){
        res.status(500).json({error: "Erro ao buscar usuário"});
    }   
}

const addUserHandler = async(req, res) => {

    const{nomeCompleto, email, senhaHash, cidade, bairro} = req.body;

    if(!nomeCompleto){
        return res.status(400).json({error: "Nome completo é obrigatório"});
    }

    try{
        const usuario = await addUser(nomeCompleto, email, senhaHash, cidade, bairro);
        res.status(201).json(usuario);
    }

    catch(error){
        res.status(500).json({error: error.message});
    }

}

const updateUserHandler = async(req, res) => {

    const id_usuario = parseInt(req.params.id);

    const{ nomeCompleto, email, senhaHash, cidade, bairro } = req.body;

    if(!nomeCompleto){
        return res.status(400).json({error: "Nome completo é obrigatório"});
    }

    if(!email){
        return res.status(400).json({error: "email é obrigatório"});
    }

    try{
        const usuario  = await updateUser(id_usuario, nomeCompleto, email, senhaHash, cidade, bairro);

        res.status(200).json(usuario);
    }

    catch(error){
        if(error.message === 'Usuário não encontrado'){
            return res.status(404).json({error: "Usuário não encontrado"});
        }
        res.status(500).json({error: "Erro ao atualizar usuário"});
    }
}

const deleteUserHandler = async(req, res) => {
    const id_usuario = parseInt(req.params.id);

    try{
        const usuario = await deleteUser(id_usuario);
        res.status(200).json({message: "Usuário deletado com sucesso"});
    }

    catch(error){
        if(error.message === 'Usuário não encontrado'){
            return res.status(404).json({error: "Usuário não encontrado"});
        }
        res.status(500).json({error: "Erro ao deletar usuário"});
    }
}


module.exports = {
    getAllUsersHandler,
    getUserByIdHandler,
    addUserHandler,
    updateUserHandler,
    deleteUserHandler
};


