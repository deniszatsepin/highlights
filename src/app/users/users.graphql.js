import {resolver} from 'graphql-sequelize';
import {User} from '../../data/models';
import UserController from './users.controller';

import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql';

const UserType = new GraphQLObjectType({
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

const UserCreateType = new GraphQLInputObjectType({
  name: 'UserCreateType',
  description: 'User type for registration',
  fields: {
    username: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name of the user'
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
});

const usersField = {
  type: new GraphQLList(UserType),
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
  type: UserType,
  args: {
    id: {
      description: 'id of the user',
      type: new GraphQLNonNull(GraphQLInt)
    }
  },
  resolve: resolver(User)
};

const createUser = {
  type: UserType,
  description: 'Create new user',
  args: {
    user: {
      type: UserCreateType
    }
  },
  resolve: (value, { user }) => {
    return UserController.create(user);
  }
};

export default {
  queries: {
    users: usersField,
    user: userField
  },
  mutations: {
    user: createUser
  }
} 
