const { PrismaClient } = require("@prisma/client");
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();


async function main() {
  console.log("🌱 Iniciando seed do banco...");

  // Limpar dados anteriores
  await prisma.proposta.deleteMany();
  await prisma.item.deleteMany();
  await prisma.categoria.deleteMany();
  await prisma.usuario.deleteMany();

  console.log("🗑️ Tabelas limpas!");

  const senha = '123456'; // senha padrão
  const senhaHash = await bcrypt.hash(senha, 10);
  // Criar usuários
  const usuario1 = await prisma.usuario.create({
    data: {
      nomeCompleto: "Maria Souza",
      email: "maria@example.com",
      senhaHash,
      cidade: "Fortaleza",
      bairro: "Aldeota",
    },
  });

  const usuario2 = await prisma.usuario.create({
    data: {
      nomeCompleto: "João Silva",
      email: "joao@example.com",
      senhaHash,
      cidade: "Fortaleza",
      bairro: "Centro",
    },
  });

  console.log("👥 Usuários criados:", usuario1.id, usuario2.id);

  // Criar categorias
  const categoria1 = await prisma.categoria.create({
    data: {
      nome: "Eletrônicos e Tecnologia",
      descricao: "Celulares e tablets; Notebooks e periféricos; TVs e monitores; Games e consoles",
    },
  });

  const categoria2 = await prisma.categoria.create({
    data: {
      nome: "Itens para Casa",
      descricao: "Móveis; Eletrodomésticos; Decoração; Utensílios domésticos",
    },
  });

  const categoria3 = await prisma.categoria.create({
    data: {
      nome: "Moda e Acessórios",
      descricao: "Roupas femininas, masculinas e infantis; Calçados; Bolsas e mochilas; Bijuterias e acessórios",
    },
  });

  const categoria4 = await prisma.categoria.create({
    data: {
      nome: "Cultura e Educação",
      descricao: "Livros e revistas; Material escolar; Instrumentos musicais; Brinquedos educativos",
    },
  });

  const categoria5 = await prisma.categoria.create({
    data: {
      nome: "Infantil",
      descricao: "Roupas de bebê; Brinquedos; Carrinhos e cadeirinhas; Produtos de maternidade",
    },
  });

  const categoria6 = await prisma.categoria.create({
    data: {
      nome: "Ferramentas e Jardinagem",
      descricao: "Ferramentas manuais e elétricas; Equipamentos de jardinagem; Vasos e plantas; Materiais de construção",
    },
  });

  const categoria7 = await prisma.categoria.create({
    data: {
      nome: "Pets",
      descricao: "Rações e petiscos; Brinquedos para pets; Camas e casinhas; Acessórios",
    },
  });

  const categoria8 = await prisma.categoria.create({
    data: {
      nome: "Higiene e Beleza",
      descricao: "Cosméticos; Produtos de cuidados pessoais; Perfumes; Maquiagem",
    },
  });

  const categoria9 = await prisma.categoria.create({
    data: {
      nome: "Outros",
      descricao: "Outros",
    },
  });

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
      categoriaId: categoria4.id,
    },
  });

  const item3 = await prisma.item.create({
    data: {
      titulo: "Camisa",
      descricao: "Camisa de botão azul, tamanho M",
      estadoConservacao: "Ótimo",
      urlImagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzCLTClyJxqWEf7lo12kk_FDZIKhayBe_Bbw&s",
      enderecoRetirada: "Rua Major Facundo, 456",
      bairro: "Centro",
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
      categoriaId: categoria1.id,
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
