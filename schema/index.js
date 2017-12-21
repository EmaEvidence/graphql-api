import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} from 'graphql';

const MeType = require('../types/me');
const pgdb = require('../database/pgdb');

const RootQueryObject = new GraphQLObjectType({
  name: 'RootQueryObject',
  fields: {
    me: {
      type: MeType,
      description: 'Current User identified by a unique key',
      args: {
        key: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (obj, args, { pgPool }) => {
        return pgdb(pgPool).getUser(args.key);
      }
    }
  }
});

const newSchema = new GraphQLSchema({
  query: RootQueryObject
});

export default newSchema;
