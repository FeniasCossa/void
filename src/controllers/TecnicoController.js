const Tecnico = require('../models/Tecnico');

exports.criarTecnico = async (req, res) => {
  try {
    const tecnico = await Tecnico.create(req.body);
    res.status(201).json(tecnico);
  } catch (error) {
    res.status(400).json({ erro: "Erro ao salvar Tecnico\n - "+error.message });
  }
};

exports.listarTecnicos = async (req, res) => {
  try {
    const tecnicos = await Tecnico.findAll();
    res.json(tecnicos);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao listar técnicos' });
  }
};
