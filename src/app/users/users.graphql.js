import {resolver} from 'graphql-sequelize';
import {User} from '../../data/models';
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql';

const userType = new GraphQLObjectType({
  name: 'User',
  description: 'A platform user',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The id of the user'
    },
    username: {
      type: GraphQLString,
      description: 'The name of the user'
    },
    email: {
      type: GraphQLString
    }
  }
});

const usersField = {
  type: new GraphQLList(userType),
  args: {
    limit: {
      type: GraphQLInt
    },
    order: {
      type: GraphQLString
    }
  },
  resolve: resolver(User)
};

const userField = {
  type: userType,
  args: {
    id: {
      description: 'id of the user',
      type: new GraphQLNonNull(GraphQLInt)
    }
  },
  resolve: resolver(User)
};

export default {
  users: usersField,
  user: userField
}
