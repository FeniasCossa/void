// controllers/tecnico.controller.js
const tecnicoService = require('../services/TecnicoService');

const criar = async (req, res) => {
  try {
    const tecnico = await tecnicoService.criarTecnico(req.body);
    res.status(201).json(tecnico);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

const listar = async (req, res) => {
  try {
    const tecnicos = await tecnicoService.listarTecnicos();
    res.json(tecnicos);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const obterPorId = async (req, res) => {
  try {
    const tecnico = await tecnicoService.obterTecnico(req.params.id);
    if (!tecnico) return res.status(404).json({ erro: 'Técnico não encontrado' });
    res.json(tecnico);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const atualizar = async (req, res) => {
  try {
    const tecnico = await tecnicoService.atualizarTecnico(req.params.id, req.body);
    if (!tecnico) return res.status(404).json({ erro: 'Técnico não encontrado' });
    res.json(tecnico);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

const remover = async (req, res) => {
  try {
    const tecnico = await tecnicoService.removerTecnico(req.params.id);
    if (!tecnico) return res.status(404).json({ erro: 'Técnico não encontrado' });
    res.json({ mensagem: 'Técnico removido com sucesso' });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

module.exports = {
  criar,
  listar,
  obterPorId,
  atualizar,
  remover
};
