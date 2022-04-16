const { Sequelize } = require("sequelize");
const db = new Sequelize({
  dialect: 'sqlite',
  storage: 'mydb.sqlite'
});

module.exports = db;
