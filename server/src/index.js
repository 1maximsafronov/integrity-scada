require(`dotenv`).config();
const cors = require(`cors`);
const path = require(`path`);
const express = require(`express`);

const sequelize = require('./db');
const Models = require("./models/models");
const userContriller = require("./controllers/user")
const apiRouter = require("./routes/api");
const { Server } = require('http');

const HTTP_PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../../client/public')));

const start = async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync({
    //     force: true
    // });
    await sequelize.sync();
    await userContriller.createAdmin();
    app.listen(HTTP_PORT, () => {
      console.log(`erver running at http://localhost:${HTTP_PORT}`);
    });
  } catch (error) {
    console.error("Ошибка", error)
  }
}

// app.get("/", (req, res) => res.json({ message: `alive` }));
app.use("/api", apiRouter);
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/public', 'index.html'));
});
app.use((req, res) => res.sendStatus(404));


start();
