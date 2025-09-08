const express = require('express');
const router = express.Router();
const {getAllCategoriasHandler, getCategoriaByIdHandler, addCategoriaHandler, updateCategoriaHandler, deleteCategoriaHandler} = require('../controllers/categoriaController');

router.get('/', getAllCategoriasHandler);
router.get('/:id', getCategoriaByIdHandler);
router.post('/', addCategoriaHandler);
router.put('/:id', updateCategoriaHandler);
router.delete('/:id', deleteCategoriaHandler);

module.exports = router;