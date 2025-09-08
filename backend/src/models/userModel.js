const prisma = require('../prisma');

const getAllUsers = () => {
    return prisma.usuario.findMany({
        orderBy: {
            id: 'asc'
        },
        include: {
            itens: true,
            propostas: true
        }
    });
}

const getUserById = async(id_usuario) => {
    return prisma.usuario.findUnique({
        where: {
            id: id_usuario
        },
        include: {
            itens: true,
            propostas: true
        }
    });
}

const addUser = (nomeCompleto, email, senhaHash, cidade, bairro) => {
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

const updateUser = async(id_usuario,nomeCompleto, email, senhaHash, cidade, bairro) => {
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

const deleteUser = async(id_usuario) => {
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
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
};