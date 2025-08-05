const express = require('express');
const router = express.Router();
const tecnicoController = require('../controllers/TecnicoController');

router.post('/save', tecnicoController.criarTecnico);
router.get('/list', tecnicoController.listarTecnicos);

module.exports = router;
