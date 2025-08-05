const produtorService = require('../services/ProdutorService');

module.exports = {
  async create(req, res) {
    try {
      const produtor = await produtorService.create(req.body);
      res.status(201).json(produtor);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async findAll(req, res) {
    try {
      const produtores = await produtorService.findAll();
      res.status(200).json(produtores);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async findById(req, res) {
    try {
      const produtor = await produtorService.findById(req.params.id);
      if (!produtor) return res.status(404).json({ error: 'Produtor não encontrado!' });
      res.status(200).json(produtor);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const updated = await produtorService.update(req.params.id, req.body);
      if (!updated) return res.status(404).json({ error: 'Produtor não Encontrado' });
      res.status(200).json(updated);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await produtorService.delete(req.params.id);
      if (!deleted) return res.status(404).json({ error: '{Produtor não encontrado}' });
      res.status(200).json({ message: 'Produtor removido com sucesso' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};
