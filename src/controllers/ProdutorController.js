const produtorService = require('../services/ProdutorService');

const createProdutor = async (req, res) => {
  try {
    const produtor = await produtorService.create(req.body);
    res.status(201).json(produtor);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

const listProdutores = async (req, res) => {
  try {
    const produtores = await produtorService.listar();
    res.json(produtores);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao listar produtores' });
  }
};

module.exports = {
  createProdutor,
  listProdutores,
};
