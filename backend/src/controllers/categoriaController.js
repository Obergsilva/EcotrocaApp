const {getAllCategorias, getCategoriaById, addCategoria, updateCategoria, deleteCategoria} = require('../models/categoriaModel');

const getAllCategoriasHandler = async(req, res) =>{
    try{
        const categorias = await getAllCategorias();
        res.status(200).json(categorias);
    }

    catch(error){
        res.status(500).json({error: error.message || "Erro ao buscar categorias"});
    }
}

const getCategoriaByIdHandler = async(req, res) =>{
    const id = parseInt(req.params.id);

    try{
        const categoria = await getCategoriaById(id);

        if(!categoria){
            return res.status(404).json({error: "Categoria não encontrada"});
        }
        res.status(200).json(categoria);
    }

    catch(error){
        res.status(500).json({error: error.message || "Erro ao buscar categoria"});
    }
}

const addCategoriaHandler = async(req, res) =>{
    const {nome, descricao} = req.body;

    try{
        const novaCategoria = await addCategoria(nome, descricao);
        res.status(201).json(novaCategoria);
    }
    catch(error){
        res.status(500).json({error: error.message || "Erro ao adicionar categoria"});
    }
}

const updateCategoriaHandler = async(req, res) =>{
    const id = parseInt(req.params.id);
    const {nome, descricao} = req.body;

    try{
        const categoriaAtualizada = await updateCategoria(id, nome, descricao);
        res.status(200).json(categoriaAtualizada);
    }
    catch(error){
      if(error.message === 'Categoria não encontrada'){
            return res.status(404).json({error: "Categoria não encontrada"});
        }
        res.status(500).json({error: error.message || "Erro ao atualizar categoria"});
    }
}

const deleteCategoriaHandler = async(req, res) =>{
    const id = parseInt(req.params.id);

    try{
        await deleteCategoria(id);
        res.status(200).json({message: "Categoria deletada com sucesso"});
    }
    catch(error){
        if(error.message === 'Categoria não encontrada'){
            return res.status(404).json({error: "Categoria não encontrada"});
        }
        res.status(500).json({error: error.message || "Erro ao deletar categoria"});
    }
}

module.exports = {
    getAllCategoriasHandler,
    getCategoriaByIdHandler,
    addCategoriaHandler,
    updateCategoriaHandler,
    deleteCategoriaHandler
}
