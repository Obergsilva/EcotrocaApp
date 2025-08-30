const express = require('express');
const router = express.Router();


const usuarioController = require('../controllers/usuarioController');
const itemController = require('../controllers/itemController');
const categoriaController = require('../controllers/categoriaController');
const propostaController = require('../controllers/propostaController');


router.post('/usuarios', usuarioController.criarUsuario);
router.get('/usuarios', usuarioController.listarUsuarios)
router.post('/itens', itemController.criarItem);
router.get('/itens', itemController.listarItens);


router.post('/categorias', categoriaController.criarCategoria);
router.get('/categorias', categoriaController.listarCategorias);


router.post('/propostas', propostaController.criarProposta);
router.get('/propostas', propostaController.listarPropostas);

module.exports = router;
