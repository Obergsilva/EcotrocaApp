const prisma = require("../prisma"); // importa o PrismaClient

// Pegar todos os itens
const getAllItems = (query = {}) => {
  return prisma.item.findMany({
    where: {
      ...(query.bairro && {
        bairro: { contains: query.bairro, mode: "insensitive" },
      }),
      ...(query.categoriaId && {
        categoriaId: parseInt(query.categoriaId),
      }),
    },
    include: {
      dono: true,
      categoria: true,
      propostasOfertadas: true,
      propostasDesejadas: true,
    },
    orderBy: { id: "asc" },
  });
};


// Pegar item por ID
const getItemById = (id_item) => {
  return prisma.item.findUnique({
    where: { id: id_item },
    include: {
      dono: true,
      categoria: true,
      propostasOfertadas: true,
      propostasDesejadas: true,
    },
  });
};

//Pegar itens por bairro
const getItemsByBairro = (bairro) => {
  return prisma.item.findMany({
    where: { bairro: { contains: bairro, mode: "insensitive" } },
    include: {
      dono: true,
      categoria: true,
      propostasOfertadas: true,
      propostasDesejadas: true,
    },
    orderBy: { id: "asc" },
  });
};

// Criar novo item
const addItem = ({
  titulo,
  descricao,
  estadoConservacao,
  urlImagem,
  enderecoRetirada,
  bairro,
  cidade,
  usuarioId,
  categoriaId,
}) => {
  return prisma.item.create({
    data: {
      titulo,
      descricao,
      estadoConservacao,
      urlImagem,
      enderecoRetirada,
      bairro,
      cidade,
      usuarioId,
      categoriaId,
    },
  });
};

// Atualizar item
const updateItem = async (id_item, data) => {
  const item = await prisma.item.findUnique({ where: { id: id_item } });
  if (!item) throw new Error("Item não encontrado");

  return prisma.item.update({
    where: { id: id_item },
    data,
  });
};

// Deletar item
const deleteItem = async (id_item) => {
  const item = await prisma.item.findUnique({ where: { id: id_item } });
  if (!item) throw new Error("Item não encontrado");

  return prisma.item.delete({ where: { id: id_item } });
};

module.exports = {
  getAllItems,
  getItemById,
  getItemsByBairro,
  addItem,
  updateItem,
  deleteItem,
};
