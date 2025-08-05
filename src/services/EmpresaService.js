const empresaRepository = require('../repository/EmpresaRepository');

const empresaService = {
  createEmpresa: async (data) => {
    return await empresaRepository.create(data);
  },

  getAllEmpresas: async () => {
    return await empresaRepository.findAll();
  },

  getEmpresaById: async (id) => {
    return await empresaRepository.findById(id);
  },

  updateEmpresa: async (id, data) => {
    return await empresaRepository.update(id, data);
  },

  deleteEmpresa: async (id) => {
    return await empresaRepository.delete(id);
  }
};

module.exports = empresaService;
