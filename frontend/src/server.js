import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Criar um usuário
  const novoUsuario = await prisma.Usuario.create({
    data: {
      nomeCompleto: "Gutemberg",
      email: "gutemberg@example.com",
      senhaHash: "senha123",
      cidade: "Fortaleza",
      bairro: "Fátima"
    }
  })

  console.log("Usuário criado:", novoUsuario)
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect())