const {getAllPropostas, getPropostaById, addProposta, updateProposta, deleteProposta} = require('../models/propostaModel');

const getAllPropostasHandler = async(req, res) =>{
    try{
        const propostas = await getAllPropostas();
        res.status(200).json(propostas);
    }

    catch(error){
        res.status(500).json({error: error.message || "Erro ao buscar propostas"});
    }

}

const getPropostaByIdHandler = async(req, res) => {
    const id = parseInt(req.params.id);

    try{
        const proposta = await getPropostaById(id);

        if(!proposta){
            return res.status(404).json({error: "Proposta não encontrada"});
        }

        res.status(200).json(proposta);
    }

    catch(error){
        res.status(500).json({error: "Erro ao buscar proposta"});
    }   
}

const addPropostaHandler = async(req, res) => {

    const{mensagem, autorId, itemOfertadoId, itemDesejadoId} = req.body;

    if(!mensagem){
        return res.status(400).json({error: "Mensagem é obrigatória"});
    }

    try{
        const proposta = await addProposta(mensagem, autorId, itemOfertadoId, itemDesejadoId);
        res.status(201).json(proposta);
    }

    catch(error){
        res.status(500).json({error: error.message || "Erro ao adicionar proposta"});
    }

}

const updatePropostaHandler = async(req, res) => {

    const id_proposta = parseInt(req.params.id);

    const{ mensagem, autorId, itemOfertadoId, itemDesejadoId } = req.body;

    if(!mensagem){
        return res.status(400).json({error: "Mensagem é obrigatória"});
    }

    try{
        const proposta  = await updateProposta(id_proposta, mensagem, autorId, itemOfertadoId, itemDesejadoId);

        res.status(200).json(proposta);
    }

    catch(error){
        if(error.message === 'Proposta não encontrada'){
            return res.status(404).json({error: "Proposta não encontrada"});
        }
        res.status(500).json({error: error.message || "Erro ao atualizar proposta"});
    }

}

const deletePropostaHandler = async(req, res) => {
    const id_proposta = parseInt(req.params.id);

    try{
        const proposta = await deleteProposta(id_proposta);
        res.status(200).json({message: "Proposta deletada com sucesso"});
    }

    catch(error){
        if(error.message === 'Proposta não encontrada'){
            return res.status(404).json({error: "Proposta não encontrada"});
        }
        res.status(500).json({error: error.message || "Erro ao deletar proposta"});
    }
}

module.exports = {
  getAllPropostasHandler, 
  getPropostaByIdHandler, 
  addPropostaHandler, 
  updatePropostaHandler, 
  deletePropostaHandler
};
