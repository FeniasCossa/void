const produtorService = require('../services/ProdutorService');

const criarProdutor = async (req, res) => {
  try {
    const produtor = await produtorService.criar(req.body);
    res.status(201).json(produtor);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

const listarProdutores = async (req, res) => {
  try {
    const produtores = await produtorService.listar();
    res.json(produtores);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao listar produtores' });
  }
};

module.exports = {
  criarProdutor,
  listarProdutores,
};
