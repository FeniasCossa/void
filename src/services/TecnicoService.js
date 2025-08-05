// services/tecnico.service.js
const tecnicoRepository = require('../repository/TecnicoRepository');

const criarTecnico = async (dados) => {
  return await tecnicoRepository.criar(dados);
};

const listarTecnicos = async () => {
  return await tecnicoRepository.listarTodos();
};

const obterTecnico = async (id) => {
  return await tecnicoRepository.buscarPorId(id);
};

const atualizarTecnico = async (id, dados) => {
  return await tecnicoRepository.atualizar(id, dados);
};

const removerTecnico = async (id) => {
  return await tecnicoRepository.remover(id);
};

module.exports = {
  criarTecnico,
  listarTecnicos,
  obterTecnico,
  atualizarTecnico,
  removerTecnico
};
