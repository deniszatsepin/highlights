var userEndPoints = require('./users/users.graphql.js');
var G = require('graphql');

module.exports = new G.GraphQLSchema({
  query: new G.GraphQLObjectType({
    name: 'RootQueryType',
    fields: Object.assign({}, userEndPoints)
  })
});
