const db = require("../db.js");
const { DataTypes } = require("sequelize")

const User = db.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  company: { type: DataTypes.STRING },
  city: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "basic" },
});

const OrderUser = db.define("Order_User", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  message: { type: DataTypes.STRING },
  type: { type: DataTypes.STRING },
  status: { type: DataTypes.STRING },
});

const OrderGuest = db.define("Order_Guest", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING },
  userName: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  company: { type: DataTypes.STRING },
  city: { type: DataTypes.STRING },
  message: { type: DataTypes.STRING },
  type: { type: DataTypes.STRING },
  status: { type: DataTypes.STRING },
});

const Document = db.define("Document", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  fileName: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  url: { type: DataTypes.STRING, allowNull: false },
});

const Lesson = db.define("Lesson", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  file_name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  url: { type: DataTypes.STRING, allowNull: false },
});

const UserDocument = db.define("User_Document", {
  UserId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  DocumentId: {
    type: DataTypes.INTEGER,
    references: {
      model: Document,
      key: 'id'
    }
  }
});

const UserLesson = db.define("User_Lesson", {
  UserId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  LessonId: {
    type: DataTypes.INTEGER,
    references: {
      model: Lesson,
      key: 'id'
    }
  }
});

User.hasMany(OrderUser, { foreignKey: 'UserId' });
OrderUser.belongsTo(User, { foreignKey: 'UserId' });

User.belongsToMany(Document, { through: UserDocument });
Document.belongsToMany(User, { through: UserDocument });

User.belongsToMany(Lesson, { through: UserLesson });
Lesson.belongsToMany(User, { through: UserLesson });

module.exports = {
  User,
  OrderUser,
  OrderGuest,
  Document,
  Lesson,
  UserDocument,
  UserLesson
}
