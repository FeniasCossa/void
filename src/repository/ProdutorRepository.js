const Produtor = require('../models/produtor');

class ProdutorRepository {
  async create(data) {
    return await Produtor.create(data);
  }

  async findAll() {
    return await Produtor.findAll();
  }

  async findById(id) {
    return await Produtor.findByPk(id);
  }

  async update(id, data) {
    const produtor = await Produtor.findByPk(id);
    if (!produtor) return null;
    return await produtor.update(data);
  }

  async delete(id) {
    const produtor = await Produtor.findByPk(id);
    if (!produtor) return null;
    await produtor.destroy();
    return produtor;
  }
}

module.exports = new ProdutorRepository();
