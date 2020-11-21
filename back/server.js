'use strict';

const { GraphQLServer } = require('graphql-yoga');
const conexao = require('./models/conexao');
const Tabelas = require('./models/database/tabelas');
const resolvers = require('./graphql/resolvers/');
const typeDefs = require('./graphql/schemas/');

conexao.connect(erro => {
  if (erro) console.log(erro);
  console.log('🌎 Database connected.');
  Tabelas.init(conexao);
})

const server = new GraphQLServer({
  resolvers,
  typeDefs
});

server.start(() => {
  console.log('🚀 Server started at port: http://localhost:4000. ')
});