require(`dotenv`).config();
const cors = require(`cors`);
const path = require(`path`);
const express = require(`express`);
const sequelize = require('./db.js');

const HTTP_PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());


const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(HTTP_PORT, () => {
      console.log(`erver running at http://localhost:${HTTP_PORT}`);
    });
  } catch (error) {
    console.error("Ошибка", error)
  }
}

app.get(`/`, (req, res) => res.json({ message: `alive` }));
app.use((req, res) => res.status(404));


start();
