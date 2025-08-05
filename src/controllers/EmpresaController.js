const Empresa = require('../models/Empresa');

exports.createEmpresa = async (req, res) => {
  try {
    const empresa = await Empresa.create(req.body);
    res.status(201).json(empresa);
  } catch (error) {
    res.status(400).json({ error: "Erro ao tentar cadastrar a Empresa\n "+error.message });
  }
};
