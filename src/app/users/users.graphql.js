import {resolver} from 'graphql-sequelize';
import {User} from '../../data/models';
import UserController from './users.controller';
import { ValidationError } from 'sequelize';

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

const UserCreateInputType = new GraphQLInputObjectType({
  name: 'UserCreateInputType',
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

const InputError = new GraphQLObjectType({
  name: 'InputError',
  description: 'Input user errors',
  fields: {
    key: {
      type: GraphQLString
    },
    messages: {
      type: new GraphQLList(GraphQLString)
    }
  }
});

const MutationOutputType = new GraphQLObjectType({
  name: 'MutationsOutputType',
  description: 'All mutations returns data or errors field',
  fields: {
    data: {
      type: UserType
    },
    errors: {
      type: new GraphQLList(InputError)
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
  type: MutationOutputType,
  description: 'Create new user',
  args: {
    user: {
      type: UserCreateInputType
    }
  },
  resolve: (value, { user }) => {
    return UserController
      .create(user)
      .then(
        function(res) {
          console.log('RES:', res);
          return res;
        },
        function(err) {
          console.log('ERR: ', err);
          
          if (err instanceof ValidationError) {
            return {
              errors: err.errors.map((err) => {
                return {
                  key: err.path,
                  messages: [err.message]
                };
              })
            }
          }
          
          return err;
        }
      );
  }
};

export default {
  queries: {
    users: usersField,
    user: userField
  },
  mutations: {
    create_user: createUser
  }
} 
