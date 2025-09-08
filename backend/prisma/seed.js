const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed do banco...');

  // Limpar dados anteriores
  await prisma.proposta.deleteMany();
  await prisma.item.deleteMany();
  await prisma.categoria.deleteMany();
  await prisma.usuario.deleteMany();

  console.log('🗑️ Tabelas limpas!');

  // Criar usuários
  const usuario1 = await prisma.usuario.create({
    data: {
      nomeCompleto: "Erika Pimentel",
      email: "erika@example.com",
      senhaHash: "123456", // só exemplo, não use em produção!
      cidade: "Fortaleza",
      bairro: "Aldeota"
    }
  });

  const usuario2 = await prisma.usuario.create({
    data: {
      nomeCompleto: "João Silva",
      email: "joao@example.com",
      senhaHash: "abcdef",
      cidade: "Fortaleza",
      bairro: "Centro"
    }
  });

  console.log('👥 Usuários criados:', usuario1.id, usuario2.id);

  // Criar categorias
  const categoria1 = await prisma.categoria.create({
    data: {
      nome: "Eletrônicos",
      descricao: "Celulares, notebooks e dispositivos em geral"
    }
  });

  const categoria2 = await prisma.categoria.create({
    data: {
      nome: "Livros",
      descricao: "Didáticos, literatura e revistas"
    }
  });

  console.log('📂 Categorias criadas:', categoria1.id, categoria2.id);

  // Criar itens
  const item1 = await prisma.item.create({
    data: {
      titulo: "Notebook Dell",
      descricao: "Usado, mas funcionando bem",
      estadoConservacao: "Bom",
      urlImagem: "http://example.com/notebook.jpg",
      enderecoRetirada: "Rua X, 123",
      bairro: "Aldeota",
      cidade: "Fortaleza",
      usuarioId: usuario1.id,
      categoriaId: categoria1.id
    }
  });

  const item2 = await prisma.item.create({
    data: {
      titulo: "Livro de Biologia",
      descricao: "Livro didático em ótimo estado",
      estadoConservacao: "Ótimo",
      urlImagem: "http://example.com/livro.jpg",
      enderecoRetirada: "Rua Y, 456",
      bairro: "Centro",
      cidade: "Fortaleza",
      usuarioId: usuario2.id,
      categoriaId: categoria2.id
    }
  });

  console.log('📦 Itens criados:', item1.id, item2.id);

  // Criar proposta
  const proposta = await prisma.proposta.create({
    data: {
      autorId: usuario1.id,         // Erika fez a proposta
      itemOfertadoId: item1.id,     // Erika oferece o notebook
      itemDesejadoId: item2.id,     // Quer o livro do João
      mensagem: "Gostaria de trocar meu notebook pelo seu livro, topa?"
    }
  });

  console.log('🤝 Proposta criada:', proposta.id);

  console.log('✅ Seed finalizado com sucesso!');
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
