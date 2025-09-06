const {getAllUsuarios, getUsuarioById, addUsuario, updateUsuario, deleteUsuario} = require('../models/usuarioModel');

const getAllUsuariosHandler = async(req, res) =>{
    try{
        const usuarios = await getAllUsuarios();
        res.status(200).json(usuarios);
    }

    catch(error){
        res.status(500).json({error: error.message || "Erro ao buscar usuários"});
    }

}

const getUsuarioByIdHandler = async(req, res) => {
    const id = parseInt(req.params.id);

    try{
        const usuario = await getUsuarioById(id);

        if(!usuario){
            return res.status(404).json({error: "Usuário não encontrado"});
        }

        res.status(200).json(usuario);
    }

    catch(error){
        res.status(500).json({error: "Erro ao buscar usuário"});
    }   
}

const addUsuarioHandler = async(req, res) => {

    const{nomeCompleto, email, senhaHash, cidade, bairro} = req.body;

    if(!nomeCompleto){
        return res.status(400).json({error: "Nome completo é obrigatório"});
    }

    try{
        const usuario = await addUsuario(nomeCompleto, email, senhaHash, cidade, bairro);
        res.status(201).json(usuario);
    }

    catch(error){
        res.status(500).json({error: error.message});
    }

}

const updateUsuarioHandler = async(req, res) => {

    const id_usuario = parseInt(req.params.id);

    const{ nomeCompleto, email, senhaHash, cidade, bairro } = req.body;

    if(!nomeCompleto){
        return res.status(400).json({error: "Nome completo é obrigatório"});
    }

    try{
        const usuario  = await updateUsuario(id_usuario, nomeCompleto, email, senhaHash, cidade, bairro);

        res.status(200).json(usuario);
    }

    catch(error){
        if(error.message === 'Usuário não encontrado'){
            return res.status(404).json({error: "Usuário não encontrado"});
        }
        res.status(500).json({error: "Erro ao atualizar usuário"});
    }
}

const deleteUsuarioHandler = async(req, res) => {
    const id_usuario = parseInt(req.params.id);

    try{
        const usuario = await deleteUsuario(id_usuario);
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
    getAllUsuariosHandler,
    getUsuarioByIdHandler,
    addUsuarioHandler,
    updateUsuarioHandler,
    deleteUsuarioHandler
};
