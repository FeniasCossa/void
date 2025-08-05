// repositories/produtorCampanhaRepository.js
const ProdutorCampanha = require('../models/ProdutorCampanha');

async function atribuirProdutor({ produtor_id, tecnico_id, campanha_id }) {
  return await ProdutorCampanha.create({ produtor_id, tecnico_id, campanha_id });
}

async function transferirProdutor({ produtor_id, tecnico_antigo_id, tecnico_novo_id, campanha_id }) {
  const registro = await ProdutorCampanha.findOne({
    where: { produtor_id, tecnico_id: tecnico_antigo_id, campanha_id }
  });

  if (!registro) return null;

  registro.tecnico_id = tecnico_novo_id;
  registro.data_transferencia = new Date();
  await registro.save();
  return registro;
}

async function listarPorTecnico(tecnico_id) {
  return await ProdutorCampanha.findAll({
    where: { tecnico_id },
    include: ['Tecnico']
  });
}

module.exports = {
  atribuirProdutor,
  transferirProdutor,
  listarPorTecnico,
};
