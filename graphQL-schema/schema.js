const graphql = require('graphql');
const queryType = require('./queries/queries');

const schema = new graphql.GraphQLSchema({
  query: queryType
});

module.exports = schema;
