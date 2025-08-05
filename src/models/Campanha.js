const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Empresa = require('./Empresa');

const Campanha = sequelize.define('Campanha', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  data_inicio: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  data_fim: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      isAfterStartDate(value) {
        if (this.data_inicio && value <= this.data_inicio) {
          throw new Error('A data final deve ser posterior à data de início');
        }
      }
    }
  },
  empresa_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Empresa,
      key: 'id'
    }
  }
}, {
  tableName: 'campanhas',
  timestamps: false
});

Campanha.belongsTo(Empresa, { foreignKey: 'empresa_id' });
Empresa.hasMany(Campanha, { foreignKey: 'empresa_id' });

module.exports = Campanha;
