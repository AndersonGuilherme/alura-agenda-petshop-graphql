const path = require('path');
const { fileLoader,  mergeResolvers } = require('merge-graphql-schemas'); 

const files = path.join(__dirname, './');

const loaded = fileLoader(files);
const resolvers = mergeResolvers(loaded);

module.exports = resolvers