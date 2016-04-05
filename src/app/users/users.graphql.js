const resolver = require('graphql-sequelize').resolver;
const User = require('../../data/models').User;
const G = require('graphql');

const userType = new G.GraphQLObjectType({
  name: 'User',
  description: 'A platform user',
  fields: {
    id: {
      type: new G.GraphQLNonNull(G.GraphQLInt),
      description: 'The id of the user'
    },
    username: {
      type: G.GraphQLString,
      description: 'The name of the user'
    },
    email: {
      type: G.GraphQLString
    }
  }
});

const usersField = {
  type: new G.GraphQLList(userType),
  args: {
    limit: {
      type: G.GraphQLInt
    },
    order: {
      type: G.GraphQLString
    }
  },
  resolve: resolver(User)
};

const userField = {
  type: userType,
  args: {
    id: {
      description: 'id of the user',
      type: new G.GraphQLNonNull(G.GraphQLInt)
    }
  },
  resolve: resolver(User)
};

module.exports =  {
  users: usersField,
  user: userField
};
