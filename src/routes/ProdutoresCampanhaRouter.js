// routes/produtorCampanhaRoutes.js
const express = require('express');
const router = express.Router();
const produtorCampanhaController = require('../controllers/produtorCampanhaController');

router.post('/atribuir', produtorCampanhaController.atribuirProdutor);
router.put('/transferir', produtorCampanhaController.transferirProdutor);
router.get('/tecnico/:id/produtores', produtorCampanhaController.listarPorTecnico);

module.exports = router;
