-- CreateTable
CREATE TABLE "public"."Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Item" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "public"."Usuario"("email");

-- AddForeignKey
ALTER TABLE "public"."Item" ADD CONSTRAINT "Item_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "public"."Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
