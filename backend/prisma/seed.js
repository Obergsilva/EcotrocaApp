const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed do banco...");

  // Limpar dados anteriores
  await prisma.proposta.deleteMany();
  await prisma.item.deleteMany();
  await prisma.categoria.deleteMany();
  await prisma.usuario.deleteMany();

  console.log("🗑️ Tabelas limpas!");

  // Criar usuários
  const usuario1 = await prisma.usuario.create({
    data: {
      nomeCompleto: "Maria Souza",
      email: "maria@example.com",
      senhaHash: "123456", // só exemplo, não use em produção!
      cidade: "Fortaleza",
      bairro: "Aldeota",
    },
  });

  const usuario2 = await prisma.usuario.create({
    data: {
      nomeCompleto: "João Silva",
      email: "joao@example.com",
      senhaHash: "abcdef",
      cidade: "Fortaleza",
      bairro: "Centro",
    },
  });

  console.log("👥 Usuários criados:", usuario1.id, usuario2.id);

  // Criar categorias
  const categoria1 = await prisma.categoria.create({
    data: {
      nome: "Eletrônicos",
      descricao: "Celulares, notebooks e dispositivos em geral",
    },
  });

  const categoria2 = await prisma.categoria.create({
    data: {
      nome: "Livros",
      descricao: "Didáticos, literatura e revistas",
    },
  });

  const categoria3 = await prisma.categoria.create({
    data: {
      nome: "Roupas",
      descricao: "Camisas, calças e acessórios",
    },
  });

  const categoria4 = await prisma.categoria.create({
    data: {
      nome: "Outros",
      descricao: "Outros",
    },
  });

  console.log(
    "📂 Categorias criadas:",
    categoria1.id,
    categoria2.id,
    categoria3.id,
    categoria4.id
  );

  // Criar itens
  const item1 = await prisma.item.create({
    data: {
      titulo: "Notebook Dell",
      descricao: "Usado, mas funcionando bem",
      estadoConservacao: "Bom",
      urlImagem:
        "https://images.tcdn.com.br/img/img_prod/672177/notebook_dell_vostro_3550_core_i5_2450m_4gb_500gb_707_1_20200529165029.jpeg",
      enderecoRetirada: "Rua Mario Mamede, 123",
      bairro: "Aldeota",
      cidade: "Fortaleza",
      usuarioId: usuario1.id,
      categoriaId: categoria1.id,
    },
  });

  const item2 = await prisma.item.create({
    data: {
      titulo: "Livro de Biologia",
      descricao: "Livro didático em ótimo estado",
      estadoConservacao: "Ótimo",
      urlImagem:
        "https://http2.mlstatic.com/D_NQ_NP_729658-MLB80311196785_102024-O.webp",
      enderecoRetirada: "Rua Major Facundo, 456",
      bairro: "Centro",
      cidade: "Fortaleza",
      usuarioId: usuario2.id,
      categoriaId: categoria2.id,
    },
  });

  const item3 = await prisma.item.create({
    data: {
      titulo: "Camisa",
      descricao: "Camisa de botão azul, tamanho M",
      estadoConservacao: "Ótimo",
      urlImagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzCLTClyJxqWEf7lo12kk_FDZIKhayBe_Bbw&s",
      enderecoRetirada: "Rua Mario Mamede, 123",
      bairro: "Aldeota",
      cidade: "Fortaleza",
      usuarioId: usuario2.id,
      categoriaId: categoria2.id,
    },
  });

  const item4 = await prisma.item.create({
    data: {
      titulo: "Iphone 8 256gb",
      descricao:
        "iphone usado 256gb. saúde da bateria: 78%. não acompanha fone e carregador. tenho a nota original",
      estadoConservacao: "Bom",
      urlImagem:
        "https://photos.enjoei.com.br/iphone-8-plus-256gb-79530280/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy82NzQ3OTkzLzgxMTBjMjAxZTUyZTA2N2EyZDA0N2M0YTE5NzgwYTZkLmpwZw",
      enderecoRetirada: "Rua Major Facundo, 456",
      bairro: "Centro",
      cidade: "Fortaleza",
      usuarioId: usuario2.id,
      categoriaId: categoria2.id,
    },
  });

  console.log("📦 Itens criados:", item1.id, item2.id, item3.id, item4.id);

  // Criar proposta
  const proposta = await prisma.proposta.create({
    data: {
      autorId: usuario1.id, // Maria fez a proposta
      itemOfertadoId: item1.id, // Maria oferece o notebook
      itemDesejadoId: item2.id, // Maria quer o livro do João
      mensagem: "Gostaria de trocar meu notebook pelo seu livro, topa?",
    },
  });

  console.log("🤝 Proposta criada:", proposta.id);

  console.log("✅ Seed finalizado com sucesso!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
