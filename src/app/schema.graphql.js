import user from './users/users.graphql';
import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: Object.assign({}, user.queries)
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationTyps',
    fields: Object.assign({}, user.mutations)
  })
});
