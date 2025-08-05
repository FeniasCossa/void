// controllers/produtorCampanhaController.js
const produtorCampanhaService = require('../services/produtorCampanhaService');

async function atribuirProdutor(req, res) {
  try {
    const result = await produtorCampanhaService.atribuirProdutorService(req.body);
    res.status(201).json({ mensagem: 'Produtor atribuído com sucesso', data: result });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
}

async function transferirProdutor(req, res) {
  try {
    const result = await produtorCampanhaService.transferirProdutorService(req.body);
    if (!result) return res.status(404).json({ erro: 'Associação não encontrada' });
    res.status(200).json({ mensagem: 'Produtor transferido com sucesso', data: result });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
}

async function listarPorTecnico(req, res) {
  try {
    const { id } = req.params;
    const result = await produtorCampanhaService.listarProdutoresPorTecnico(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
}

module.exports = {
  atribuirProdutor,
  transferirProdutor,
  listarPorTecnico,
};
