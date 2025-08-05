/**
 * @swagger
 * tags:
 *   name: Técnicos
 *   description: Endpoints de gestão de técnicos
 */

const express = require('express');
const router = express.Router();
const tecnicoController = require('../controllers/TecnicoController');

/**
 * @swagger
 * /tecnico/save:
 *   post:
 *     summary: Criar um novo técnico
 *     tags: [Técnicos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               telefone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Técnico criado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post('/save', tecnicoController.criar);

/**
 * @swagger
 * /tecnico/list:
 *   get:
 *     summary: Listar todos os técnicos
 *     tags: [Técnicos]
 *     responses:
 *       200:
 *         description: Lista de técnicos
 */
router.get('/list', tecnicoController.listar);

/**
 * @swagger
 * /tecnico/list/{id}:
 *   get:
 *     summary: Buscar técnico por ID
 *     tags: [Técnicos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do técnico
 *     responses:
 *       200:
 *         description: Técnico encontrado
 *       404:
 *         description: Técnico não encontrado
 */
router.get('/list/:id', tecnicoController.obterPorId);

/**
 * @swagger
 * /tecnico/update/{id}:
 *   put:
 *     summary: Atualizar técnico existente
 *     tags: [Técnicos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do técnico
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               telefone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Técnico atualizado
 *       400:
 *         description: Dados inválidos
 */
router.put('/update/:id', tecnicoController.atualizar);

/**
 * @swagger
 * /tecnico/delete/{id}:
 *   delete:
 *     summary: Remover técnico
 *     tags: [Técnicos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do técnico
 *     responses:
 *       200:
 *         description: Técnico removido
 *       404:
 *         description: Técnico não encontrado
 */
router.delete('/delete/:id', tecnicoController.remover);

module.exports = router;
