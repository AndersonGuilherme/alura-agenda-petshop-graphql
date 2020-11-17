'use strict';

const operation = require('../../models/operations');
const Clientes = new operation('cliente');

const resolvers = { 
  Query: {
    clientes: () => Clientes.lista(),
    cliente: (root, { id }) => Clientes.buscaPorId(id),
  },
  Mutation: {
    storeCliente: (root, params) => Clientes.adiciona(params),
    updateCliente: (root, params) => Clientes.atualiza(params),
    destroyCliente: (root, params) => Clientes.deleta(params),
  }
}

module.exports = resolvers;
