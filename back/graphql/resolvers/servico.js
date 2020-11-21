'use strict';

const operation = require('../../models/operations');
const Servicos = new operation('servico');

const resolvers = { 
  Query: {
    servicos: () => Servicos.lista(),
    servico: (root, { id }) => Servicos.buscaPorId(id),
  },
  Mutation: {
    storeServico: (root, params) => Servicos.adiciona(params),
    updateServico: (root, params) => Servicos.atualiza(params),
    destroyServico: (root, params) => Servicos.deleta(params)
  }
}

module.exports = resolvers;
