const path = require('path');
const { fileLoader, mergeTypes, mergeResolvers } = require('merge-graphql-schemas'); 

const files = path.join(__dirname, './');

const loaded = fileLoader(files);
const schemas = mergeTypes(loaded);
module.exports = schemas;