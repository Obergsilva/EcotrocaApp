import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Criar usuário
router.post('/', async (req, res) => {
  const { nome, email, senha } = req.body;
  const usuario = await prisma.usuario.create({
    data: { nome, email, senha }
  });
  res.json(usuario);
});

// Listar usuários
router.get('/', async (req, res) => {
  const usuarios = await prisma.usuario.findMany();
  res.json(usuarios);
});

export default router;
