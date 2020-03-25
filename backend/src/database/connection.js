const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

// Exportar conexão com banco
module.exports = connection;