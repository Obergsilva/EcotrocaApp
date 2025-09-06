const prisma = require('../prisma');

const getAllUsuarios = () => {
    return prisma.usuario.findMany({
        orderBy: {
            id: 'desc'
        }
    });
}

const getUsuarioById = async(id_usuario) => {
    return prisma.usuario.findUnique({
        where: {
            id: id_usuario
        }
    });
}

const addUsuario = (nomeCompleto, email, senhaHash, cidade, bairro) => {
    return prisma.usuario.create({
        data: {
            nomeCompleto: nomeCompleto,
            email: email,
            senhaHash: senhaHash,
            cidade: cidade,
            bairro: bairro
        }
    });
}

const updateUsuario = async(id_usuario,nomeCompleto, email, senhaHash, cidade, bairro) => {
    const usuario = await prisma.usuario.findUnique({
        where: {
            id: id_usuario
        }
    });

    if(!usuario) {
        throw new Error('Usuário não encontrado');
    }

    return prisma.usuario.update({
        where: {
            id: id_usuario
        },
        data: {
            nomeCompleto: nomeCompleto,
            email: email,
            senhaHash: senhaHash,
            cidade: cidade,
            bairro: bairro
        }
    });
}

const deleteUsuario = async(id_usuario) => {
    const usuario = await prisma.usuario.findUnique({
        where: {
            id: id_usuario
        }
    });

    if(!usuario) {
        throw new Error('Usuário não encontrado');
    }

    return prisma.usuario.delete({
        where: {
            id: id_usuario
        }
    });
}


module.exports = {
    getAllUsuarios,
    getUsuarioById,
    addUsuario,
    updateUsuario,
    deleteUsuario
};