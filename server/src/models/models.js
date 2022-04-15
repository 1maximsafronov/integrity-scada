const db = require("../db.js");
const { DataTypes } = require("sequelize")

const User = db.define("User", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, },
  password: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  company: { type: DataTypes.STRING },
  city: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "Basic" },
  reg_date: { type: DataTypes.STRING },
});

const Order = {};


module.exports = {
  User
}
