const Campanha = require('../models/Campanha');

class CampanhaRepository {
  async create(dados) {
    return await Campanha.create(dados);
  }

  async findAll() {
    return await Campanha.findAll({ include: 'Empresa' });
  }

  async findById(id) {
    return await Campanha.findByPk(id, { include: 'Empresa' });
  }

  async update(id, dados) {
    const campanha = await Campanha.findByPk(id);
    if (!campanha) return null;
    return await campanha.update(dados);
  }

  async delete(id) {
    const campanha = await Campanha.findByPk(id);
    if (!campanha) return null;
    await campanha.destroy();
    return campanha;
  }
}

module.exports = new CampanhaRepository();
