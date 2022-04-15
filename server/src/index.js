require("dotenv").config();
const cors = require('cors');
const path = require('path');
const express = require(`express`);
const sequelize = require('./db');

const HTTP_PORT = 5000;

const app = express();

app.listen(HTTP_PORT, () => {
  console.log(`erver running at http://localhost:${HTTP_PORT}`);
});

app.get(`/`, (req, res) => res.json({ message: `alive` }));
app.use((req, res) => res.status(404));
