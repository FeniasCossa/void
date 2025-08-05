// models/ProdutorCampanha.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ProdutorCampanha = sequelize.define('ProdutorCampanha', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  produtor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  campanha_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tecnico_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  data_registro: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  data_transferencia: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'produtores_campanhas',
  timestamps: false,
});

  ProdutorCampanha.associate = (models) => {
  ProdutorCampanha.belongsTo(models.Produtor, {
    foreignKey: "produtor_id",
    as: "produtor",
  });

  ProdutorCampanha.belongsTo(models.Tecnico, {
    foreignKey: "tecnico_id",
    as: "tecnico",
  });

  ProdutorCampanha.belongsTo(models.Campanha, {
    foreignKey: "campanha_id",
    as: "campanha",
  });
};

module.exports = ProdutorCampanha;
