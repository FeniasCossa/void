const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Produtor = sequelize.define('Produtor', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  localizacao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'produtores',
  timestamps: false
});

module.exports = Produtor;
