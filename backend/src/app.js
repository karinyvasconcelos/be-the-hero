const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); // Conversao em objeto javascript
app.use(routes);
app.use(errors());

/*
Métodos HTTP:

GET: Buscar/listar uma informação do back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end
*/

/*
Tipos de parâmetros:

Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
Route Params: Parâmetros utilizados para identifiar recursos 
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

module.exports = app;