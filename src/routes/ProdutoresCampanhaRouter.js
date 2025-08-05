const express = require('express');
const router = express.Router();
const produtorCampanhaController = require('../controllers/produtorCampanhaController');

/**
 * @swagger
 * tags:
 *   name: Produtores-Campanhas
 *   description: Endpoint para gerenciar a associação entre produtores, técnicos e campanhas
 */

/**
 * @swagger
 * /produtor-campanha/atribuir:
 *   post:
 *     summary: Atribuir um produtor a um técnico em uma campanha
 *     tags: [Produtores-Campanhas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - produtor_id
 *               - tecnico_id
 *               - campanha_id
 *             properties:
 *               produtor_id:
 *                 type: integer
 *                 example: 1
 *               tecnico_id:
 *                 type: integer
 *                 example: 2
 *               campanha_id:
 *                 type: integer
 *                 example: 3
 *     responses:
 *       201:
 *         description: Produtor atribuído com sucesso
 *       500:
 *         description: Erro no servidor
 */
router.post('/atribuir', produtorCampanhaController.atribuirProdutor);

/**
 * @swagger
 * /produtor-campanha/transferir:
 *   put:
 *     summary: Transferir um produtor de um técnico para outro em uma campanha
 *     tags: [Produtores-Campanhas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - produtor_id
 *               - tecnico_antigo_id
 *               - tecnico_novo_id
 *               - campanha_id
 *             properties:
 *               produtor_id:
 *                 type: integer
 *                 example: 1
 *               tecnico_antigo_id:
 *                 type: integer
 *                 example: 2
 *               tecnico_novo_id:
 *                 type: integer
 *                 example: 3
 *               campanha_id:
 *                 type: integer
 *                 example: 4
 *     responses:
 *       200:
 *         description: Produtor transferido com sucesso
 *       404:
 *         description: Associação não encontrada
 *       500:
 *         description: Erro no servidor
 */
router.put('/transferir', produtorCampanhaController.transferirProdutor);

/**
 * @swagger
 * /produtor-campanha/tecnico/{id}/produtores:
 *   get:
 *     summary: Listar todos os produtores atribuídos a um técnico
 *     tags: [Produtores-Campanhas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do técnico
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Lista de produtores atribuídos ao técnico
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nome:
 *                     type: string
 *                   localizacao:
 *                     type: string
 *       500:
 *         description: Erro no servidor
 */
router.get('/tecnico/:id/produtores', produtorCampanhaController.listarPorTecnico);

module.exports = router;
