const campanhaRepo = require('../repository/CampanhaRepository');

class CampanhaService {
  createCampanha(dados) {
    return campanhaRepo.create(dados);
  }

  findAlCampanhas() {
    return campanhaRepo.findAll();
  }

  findCampanhaById(id) {
    return campanhaRepo.findById(id);
  }

  updateCampanha(id, dados) {
    return campanhaRepo.update(id, dados);
  }

  deleteCampanha(id) {
    return campanhaRepo.delete(id);
  }
}

module.exports = new CampanhaService();
