const Campanha = require('../models/Campanha');

exports.createCampanha = async (req, res) => {
  try {
    const campanha = await Campanha.create(req.body);
    res.status(201).json(campanha);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.listCampanhas = async (req, res) => {
  try {
    const campanhas = await Campanha.findAll();
    res.json(campanhas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
