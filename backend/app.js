const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const { sequelize } = require('./models');
sequelize.sync();

module.exports = app;