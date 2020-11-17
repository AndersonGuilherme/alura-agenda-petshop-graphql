'use strict';

const operation = require('../../models/operations');
const Pets = new operation('pet');

const resolvers = { 
  Query: {
    pets: () => Pets.lista(),
    pet: (root, { id }) => Pets.buscaPorId(id)
  },
  Mutation: {
    storePet: (root, params) => Pets.adiciona(params),
    updatePet: (root, params) => Pets.atualiza(params),
    destroyPet: (root, params) => Pets.deleta(params)
  }
}

module.exports = resolvers;