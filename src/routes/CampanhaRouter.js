const express = require('express');
const router = express.Router();
const campanhaController = require('../controllers/CampanhaController');

router.post('/save', campanhaController.createCampanha);
router.get('/list', campanhaController.listCampanhas);

module.exports = router;
