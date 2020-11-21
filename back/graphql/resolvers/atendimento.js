'use strict';

const operation = require('../../models/operations');
const Atendimentos = new operation('atendimento');

const resolvers = { 
  Query: {
    atendimentos: () => Atendimentos.lista(),
    atendimento: (root, { id }) => Atendimentos.buscaPorId(id),
  },
  Mutation: {
    storeAtendimento: (root, params) => Atendimentos.adiciona(params),
    updateAtendimento: (root, params) => Atendimentos.atualiza(params),
    destroyAtendimento: (root, params) => Atendimentos.deleta(params),
  }
}

module.exports = resolvers;
