const express = require('express');
const router = express.Router();
const produtorController = require('../controllers/ProdutorController');

/**
 * @swagger
 * tags:
 *   name: Produtores
 *   description: Endpoint para gerir produtores
 */

/**
 * @swagger
 * /produtor/save:
 *   post:
 *     summary: Criar um novo produtor
 *     tags: [Produtores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - localizacao
 *             properties:
 *               nome:
 *                 type: string
 *               localizacao:
 *                 type: string
 *     responses:
 *       201:
 *         description: Produtor criado
 *       500:
 *         description: Erro no servidor
 */
router.post('/save', produtorController.create);

/**
 * @swagger
 * /produtor/list:
 *   get:
 *     summary: Listar todos os produtores
 *     tags: [Produtores]
 *     responses:
 *       200:
 *         description: Lista de produtores
 *       500:
 *         description: Erro no servidor
 */
router.get('/list', produtorController.findAll);

/**
 * @swagger
 * /produtor/list/{id}:
 *   get:
 *     summary: Obter produtor por ID
 *     tags: [Produtores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produtor encontrado
 *       404:
 *         description: Produtor não encontrado
 */
router.get('/list/:id', produtorController.findById);

/**
 * @swagger
 * /produtor/update/{id}:
 *   put:
 *     summary: Atualizar produtor por ID
 *     tags: [Produtores]
 *     parameters:
 *       - in: path
 *         name: id
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
 *               localizacao:
 *                 type: string
 *     responses:
 *       200:
 *         description: Produtor atualizado
 *       404:
 *         description: Produtor não encontrado
 */
router.put('/update/:id', produtorController.update);

/**
 * @swagger
 * /produtor/delete/{id}:
 *   delete:
 *     summary: Remover produtor por ID
 *     tags: [Produtores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produtor removido
 *       404:
 *         description: Produtor não encontrado
 */
router.delete('/delete/:id', produtorController.delete);

module.exports = router;
