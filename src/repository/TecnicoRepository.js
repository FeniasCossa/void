// repositories/tecnico.repository.js
const Tecnico = require('../models/Tecnico');

const criar = async (dados) => {
  return await Tecnico.create(dados);
};

const listarTodos = async () => {
  return await Tecnico.findAll();
};

const buscarPorId = async (id) => {
  return await Tecnico.findByPk(id);
};

const atualizar = async (id, dados) => {
  const tecnico = await Tecnico.findByPk(id);
  if (!tecnico) return null;
  await tecnico.update(dados);
  return tecnico;
};

const remover = async (id) => {
  const tecnico = await Tecnico.findByPk(id);
  if (!tecnico) return null;
  await tecnico.destroy();
  return tecnico;
};

module.exports = {
  criar,
  listarTodos,
  buscarPorId,
  atualizar,
  remover
};
