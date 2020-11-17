const clienteResolver = require('./cliente');
const petResolver = require('./pet');

module.exports = {
    ...clienteResolver,
    ...petResolver
}