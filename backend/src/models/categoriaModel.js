const  prisma = require('../prisma')

const getAllCategorias = () => {
    return prisma.categoria.findMany({
        orderBy: {
            id: 'asc'
        },
        include: {
            itens: true
        }
    });
}

const getCategoriaById = async(id_categoria) => {
    return prisma.categoria.findUnique({
        where: {
            id: id_categoria
        },
        include: {
            itens: true
        }
    });
}

const addCategoria = (nome, descricao) => {
    return prisma.categoria.create({
        data: {
            nome: nome,
            descricao: descricao
        }
    });
}

const updateCategoria = async(id_categoria,nome, descricao) => {
    const categoria = await prisma.categoria.findUnique({
        where: {
            id: id_categoria
        }
    });

    if(!categoria) {
        throw new Error('Categoria não encontrada');
    }

    return prisma.categoria.update({
        where: {
            id: id_categoria
        },
        data: {
            nome: nome,
            descricao: descricao
        }
    });
}

const deleteCategoria = async(id_categoria) => {
    const categoria = await prisma.categoria.findUnique({
        where: {
            id: id_categoria
        }
    });

    if(!categoria) {
        throw new Error('Categoria não encontrada');
    }

    return prisma.categoria.delete({
        where: {
            id: id_categoria
        }
    });
}

module.exports = {
    getAllCategorias,
    getCategoriaById,
    addCategoria,
    updateCategoria,
    deleteCategoria
}
