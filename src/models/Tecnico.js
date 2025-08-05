const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Tecnico = sequelize.define('Tecnico', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [9],
        msg: 'O telefone deve ter no mínimo 9 caracteres.'
      }
    }
  },
  provincia: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  tableName: 'tecnicos',
  timestamps: false
});

module.exports = Tecnico;
