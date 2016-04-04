import userEndPoints from './users/users.graphql.js';
import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: Object.assign({}, userEndPoints)
  })
});
