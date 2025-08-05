const campanhaService = require('../services/CampanhaService');

class CampanhaController {
  async create(req, res) {
    try {
      const campanha = await campanhaService.createCampanha(req.body);
      res.status(201).json(campanha);
    } catch (erro) {
      res.status(400).json({ erro: erro.message });
    }
  }

  async findAll(req, res) {
    try {
      const campanhas = await campanhaService.findAlCampanhas();
      res.json(campanhas);
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  }

  async findById(req, res) {
    try {
      const campanha = await campanhaService.findCampanhaById(req.params.id);
      if (!campanha) return res.status(404).json({ erro: 'Campanha não encontrada' });
      res.json(campanha);
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  }

  async update(req, res) {
    try {
      const campanha = await campanhaService.updateCampanha(req.params.id, req.body);
      if (!campanha) return res.status(404).json({ erro: 'Campanha não encontrada' });
      res.json(campanha);
    } catch (erro) {
      res.status(400).json({ erro: erro.message });
    }
  }

  async delete(req, res) {
    try {
      const campanha = await campanhaService.deleteCampanha(req.params.id);
      if (!campanha) return res.status(404).json({ erro: 'Campanha não encontrada' });
      res.json({ mensagem: 'Campanha apagada com sucesso' });
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = new CampanhaController();
