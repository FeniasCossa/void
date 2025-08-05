const empresaService = require('../services/EmpresaService');

const empresaController = {
  create: async (req, res) => {
    try {
      const novaEmpresa = await empresaService.createEmpresa(req.body);
      res.status(201).json(novaEmpresa);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const empresas = await empresaService.getAllEmpresas();
      res.json(empresas);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const empresa = await empresaService.getEmpresaById(req.params.id);
      if (!empresa) return res.status(404).json({ erro: 'Empresa não encontrada' });
      res.json(empresa);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const atualizada = await empresaService.updateEmpresa(req.params.id, req.body);
      if (!atualizada) return res.status(404).json({ erro: 'Empresa não encontrada' });
      res.json(atualizada);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  },

  remove: async (req, res) => {
    try {
      const removida = await empresaService.deleteEmpresa(req.params.id);
      if (!removida) return res.status(404).json({ erro: 'Empresa não encontrada' });
      res.json({ mensagem: 'Empresa removida com sucesso' });
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
};

module.exports = empresaController;
