// services/produtorCampanhaService.js
const produtorCampanhaRepository = require('../repository/produtorCampanhaRepository');

async function atribuirProdutorService(data) {
  return await produtorCampanhaRepository.atribuirProdutor(data);
}

async function transferirProdutorService(data) {
  return await produtorCampanhaRepository.transferirProdutor(data);
}

async function listarProdutoresPorTecnico(tecnico_id) {
  return await produtorCampanhaRepository.listarPorTecnico(tecnico_id);
}

module.exports = {
  atribuirProdutorService,
  transferirProdutorService,
  listarProdutoresPorTecnico,
};
