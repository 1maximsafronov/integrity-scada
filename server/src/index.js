const path = require(`path`);
const cors = require(`cors`);
const express = require(`express`);
const db = require('./db');
const Models = require("./models/models");
const userContriller = require("./controllers/user")
const apiRouter = require("./routes/api");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", apiRouter);

app.use(express.static(path.resolve(__dirname, '../../client/public')));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/public', 'index.html'));
});

app.use((req, res) => res.sendStatus(404));

const start = async () => {
  try {
    await db.authenticate();
    // await sequelize.sync({
    //     force: true
    // });

    await db.sync();
    await userContriller.createAdmin();

    app.listen(3000, () => {
      console.log(`erver running at http://localhost:3000`);
    });

  } catch (error) {
    console.error("Ошибка", error)
  }
}

start();
