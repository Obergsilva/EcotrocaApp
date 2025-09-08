const express = require('express');
const router = express.Router();
const {getAllPropostasHandler,getPropostaByIdHandler,addPropostaHandler,updatePropostaHandler,deletePropostaHandler} = require('../controllers/propostaController');

router.get('/', getAllPropostasHandler);
router.get('/:id', getPropostaByIdHandler);
router.post('/', addPropostaHandler);
router.put('/:id', updatePropostaHandler);
router.delete('/:id', deletePropostaHandler);

module.exports = router;