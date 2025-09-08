const prisma = require('../prisma');

const getAllPropostas = () => {
    return prisma.proposta.findMany({
        orderBy: {
            id: 'asc'
        }
    });
}

const getPropostaById = async(id_proposta) => {
    return prisma.proposta.findUnique({
        where: {
            id: id_proposta
        }
    });
}

const addProposta = (mensagem, autorId, itemOfertadoId, itemDesejadoId) => {
    return prisma.proposta.create({
        data: {
            mensagem: mensagem,
            autorId: autorId,
            itemOfertadoId: itemOfertadoId,
            itemDesejadoId: itemDesejadoId
        }
    });
}

const updateProposta = async(id_proposta, mensagem, autorId, itemOfertadoId, itemDesejadoId) => {
    const proposta = await prisma.proposta.findUnique({
        where: {
            id: id_proposta
        }
    });

    if(!proposta) {
        throw new Error('Proposta não encontrada');
    }

    return prisma.proposta.update({
        where: {
            id: id_proposta
        },
        data: {
            mensagem: mensagem,
            autorId: autorId,
            itemOfertadoId: itemOfertadoId,
            itemDesejadoId: itemDesejadoId
        }
    });
}

const deleteProposta = async(id_proposta) => {
    const proposta = await prisma.proposta.findUnique({
        where: {
            id: id_proposta
        }
    });

    if(!proposta) {
        throw new Error('Proposta não encontrada');
    }

    return prisma.proposta.delete({
        where: {
            id: id_proposta
        }
    });
}


module.exports = {
    getAllPropostas, 
    getPropostaById, 
    addProposta, 
    updateProposta, 
    deleteProposta
};