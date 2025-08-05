const produtorRepository = require('../repository/ProdutorRepository');

class ProdutorService {
  async create(data) {
    return await produtorRepository.create(data);
  }

  async findAll() {
    return await produtorRepository.findAll();
  }

  async findById(id) {
    return await produtorRepository.findById(id);
  }

  async update(id, data) {
    return await produtorRepository.update(id, data);
  }

  async delete(id) {
    return await produtorRepository.delete(id);
  }
}

module.exports = new ProdutorService();
