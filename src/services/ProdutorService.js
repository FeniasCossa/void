const produtorRepository = require('../repository/ProdutorRepository');

const create = async (dados) => {
  if (!dados.nome || !dados.localizacao) {
    throw new Error('Nome e localização são obrigatórios');
  }

  return await produtorRepository.createProdutor(dados);
};

const list = async () => {
  return await produtorRepository.listProdutores();
};

module.exports = {
  create,
  list,
};
