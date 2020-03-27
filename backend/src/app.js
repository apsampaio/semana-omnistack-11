const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate')
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

//app.listen(3333);

module.exports = app;
/**
 * Tipos de parâmetros:
 *
 * Query: Parâmetros nomeados e enviados na rota após "?" (Filtros, Paginação)
 * Route Params: Paâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*')
 */

