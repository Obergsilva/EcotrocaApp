import express from 'express';
import { PrismaClient } from '@prisma/client';
import usuariosRoutes from './routes/usuarios.js';

const express = require('express');
const app = express();
const rotas = require('./routes/routes');
const prisma = new PrismaClient();

app.use(express.json());
app.use('/api', rotas);

// Endpoint teste
app.get('/', (req, res) => {
  res.send('API rodando...');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
