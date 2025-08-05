const express = require('express');
const router = express.Router();
const produtorController = require('../controllers/ProdutorController');

router.post('/save', produtorController.createProdutor);
router.get('/list', produtorController.listProdutores);

module.exports = router;
