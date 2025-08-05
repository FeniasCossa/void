const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Empresa = sequelize.define('Empresa', {
  nome: { type: DataTypes.STRING, allowNull: false },
  cnpj: { type: DataTypes.STRING, allowNull: false, unique: true },
   telefone: {
    type: DataTypes.STRING,
    validate: {
      len: { args: [9], msg: 'O telefone deve ter no mínimo 9 caracteres'
      }
    }
  },
  email: { type: DataTypes.STRING, 
    validate: {
      len: { args: [11], msg: 'O Email deve ter no mínimo 11 caracteres'
      }
    }
  },
}, {
  tableName: 'empresas',
  timestamps: false,
});

module.exports = Empresa;
