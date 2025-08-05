const Empresa = require('../models/Empresa');

const empresaRepository = {
  create: async (data) => {
    return await Empresa.create(data);
  },

  findAll: async () => {
    return await Empresa.findAll();
  },

  findById: async (id) => {
    return await Empresa.findByPk(id);
  },

  update: async (id, data) => {
    const empresa = await Empresa.findByPk(id);
    if (!empresa) return null;
    return await empresa.update(data);
  },

  delete: async (id) => {
    const empresa = await Empresa.findByPk(id);
    if (!empresa) return null;
    await empresa.destroy();
    return empresa;
  }
};

module.exports = empresaRepository;
