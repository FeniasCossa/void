const express = require('express');
const router = express.Router();
const { createEmpresa } = require('../controllers/EmpresaController');

router.post('/save', createEmpresa);

module.exports = router;
