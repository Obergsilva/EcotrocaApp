/*
  Warnings:

  - You are about to drop the column `nome` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `senha` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `categoriaId` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enderecoRetirada` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estadoConservacao` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulo` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeCompleto` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senhaHash` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."StatusItem" AS ENUM ('DISPONIVEL', 'NEGOCIANDO', 'INDISPONIVEL');

-- CreateEnum
CREATE TYPE "public"."StatusProposta" AS ENUM ('PENDENTE', 'ACEITA', 'RECUSADA', 'CANCELADA');

-- AlterTable
ALTER TABLE "public"."Item" DROP COLUMN "nome",
ADD COLUMN     "bairro" TEXT,
ADD COLUMN     "categoriaId" INTEGER NOT NULL,
ADD COLUMN     "cidade" TEXT,
ADD COLUMN     "dataPublicacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "enderecoRetirada" TEXT NOT NULL,
ADD COLUMN     "estadoConservacao" TEXT NOT NULL,
ADD COLUMN     "status" "public"."StatusItem" NOT NULL DEFAULT 'DISPONIVEL',
ADD COLUMN     "titulo" TEXT NOT NULL,
ADD COLUMN     "urlImagem" TEXT;

-- AlterTable
ALTER TABLE "public"."Usuario" DROP COLUMN "nome",
DROP COLUMN "senha",
ADD COLUMN     "bairro" TEXT,
ADD COLUMN     "cidade" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "nomeCompleto" TEXT NOT NULL,
ADD COLUMN     "senhaHash" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "public"."Categoria" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Proposta" (
    "id" SERIAL NOT NULL,
    "dataProposta" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "public"."StatusProposta" NOT NULL DEFAULT 'PENDENTE',
    "mensagem" TEXT,
    "autorId" INTEGER NOT NULL,
    "itemOfertadoId" INTEGER NOT NULL,
    "itemDesejadoId" INTEGER NOT NULL,

    CONSTRAINT "Proposta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Categoria_nome_key" ON "public"."Categoria"("nome");

-- AddForeignKey
ALTER TABLE "public"."Item" ADD CONSTRAINT "Item_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "public"."Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Proposta" ADD CONSTRAINT "Proposta_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "public"."Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Proposta" ADD CONSTRAINT "Proposta_itemOfertadoId_fkey" FOREIGN KEY ("itemOfertadoId") REFERENCES "public"."Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Proposta" ADD CONSTRAINT "Proposta_itemDesejadoId_fkey" FOREIGN KEY ("itemDesejadoId") REFERENCES "public"."Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
