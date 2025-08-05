const express = require('express');
const router = express.Router();
const empresaController = require('../controllers/EmpresaController');

/**
 * @swagger
 * tags:
 *   name: Empresas
 *   description: Endpoints para gestão de empresas
 */

/**
 * @swagger
 * /empresa/save:
 *   post:
 *     summary: Cria uma nova empresa
 *     tags: [Empresas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               cnpj:
 *                 type: string
 *               telefone:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Empresa criada com sucesso.
 */
router.post('/save', empresaController.create);

/**
 * @swagger
 * /empresa/list:
 *   get:
 *     summary: Lista todas as empresas
 *     tags: [Empresas]
 *     responses:
 *       200:
 *         description: Lista de empresas retornada com sucesso.
 */
router.get('/list', empresaController.getAll);

/**
 * @swagger
 * /empresa/list/{id}:
 *   get:
 *     summary: Busca uma empresa por ID
 *     tags: [Empresas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Empresa encontrada.
 *       404:
 *         description: Empresa não encontrada.
 */
router.get('/list/:id', empresaController.getById);

/**
 * @swagger
 * /empresa/update/{id}:
 *   put:
 *     summary: Atualiza uma empresa existente
 *     tags: [Empresas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               cnpj:
 *                 type: string
 *               telefone:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Empresa atualizada.
 *       404:
 *         description: Empresa não encontrada.
 */
router.put('/update/:id', empresaController.update);

/**
 * @swagger
 * /empresa/delete/{id}:
 *   delete:
 *     summary: Remove uma empresa pelo ID
 *     tags: [Empresas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Empresa removida com sucesso.
 *       404:
 *         description: Empresa não encontrada.
 */
router.delete('/delete/:id', empresaController.remove);

module.exports = router;
