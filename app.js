const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const APP_PORT = process.env.API_PORT

const app = express();
const routes = require('./routes');

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(APP_PORT, () => {
  console.log(`Servidor iniciado na porta ${APP_PORT}`);
});