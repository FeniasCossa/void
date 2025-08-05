/**
 * @swagger
 * tags:
 *   name: Campanhas
 *   description: Endpoints de gestão de campanhas
 */

const express = require('express');
const router = express.Router();
const campanhaController = require('../controllers/CampanhaController');

/**
 * @swagger
 * /campanha/save:
 *   post:
 *     summary: Criar uma nova campanha
 *     tags: [Campanhas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               descricao:
 *                 type: string
 *               data_inicio:
 *                 type: string
 *                 format: date
 *               data_fim:
 *                 type: string
 *                 format: date
 *               empresa_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Campanha criada com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post('/save', campanhaController.create);

/**
 * @swagger
 * /campanha/list:
 *   get:
 *     summary: Listar todas as campanhas
 *     tags: [Campanhas]
 *     responses:
 *       200:
 *         description: Lista de campanhas
 */
router.get('/list', campanhaController.findAll);

/**
 * @swagger
 * /campanha/list/{id}:
 *   get:
 *     summary: Buscar campanha por ID
 *     tags: [Campanhas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da campanha
 *     responses:
 *       200:
 *         description: Campanha encontrada
 *       404:
 *         description: Campanha não encontrada
 */
router.get('/list/:id', campanhaController.findById);

/**
 * @swagger
 * /campanha/update/{id}:
 *   put:
 *     summary: Atualizar campanha
 *     tags: [Campanhas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da campanha
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               descricao:
 *                 type: string
 *               data_inicio:
 *                 type: string
 *                 format: date
 *               data_fim:
 *                 type: string
 *                 format: date
 *               empresa_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Campanha atualizada
 *       400:
 *         description: Dados inválidos
 */
router.put('/update/:id', campanhaController.update);

/**
 * @swagger
 * /campanha/delete/{id}:
 *   delete:
 *     summary: Apagar campanha
 *     tags: [Campanhas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da campanha
 *     responses:
 *       200:
 *         description: Campanha apagada
 *       404:
 *         description: Campanha não encontrada
 */
router.delete('/delete/:id', campanhaController.delete);

module.exports = router;
