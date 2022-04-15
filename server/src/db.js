const { Sequelize } = require("sequelize");
const db = new Sequelize({
  dialect: 'sqlite',
  storage: 'mydb.db'
});

module.exports = db;
