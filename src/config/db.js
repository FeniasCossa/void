const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('void_db', 'root', '845435593', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;
