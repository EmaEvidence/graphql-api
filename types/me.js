import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLNonNull,
    GraphQLString,
    GraphQLList
} from 'graphql';
// import { fromSnakeCase } from '../lib/util';
import ContestType from '../types/Contest';
import pgdb from '../database//pgdb';

module.exports = new GraphQLObjectType({
  name: 'MeType',
  fields: {
    id: { type: GraphQLID },
    fullname: {
      type: GraphQLString,
      resolve: obj => `${obj.firstName} ${obj.lastName}`
    },
    // firstName: { type: GraphQLString },
    // lastName: { type: GraphQLString },
    // firstName: fromSnakeCase(GraphQLString),
    // lastName: fromSnakeCase(GraphQLString),
    email: { type: new GraphQLNonNull(GraphQLString) },
    // createdAt: fromSnakeCase(GraphQLString)
    createdAt: { type: GraphQLString },
    contests: {
      type: new GraphQLList(ContestType),
      resolve(obj, args, { pgPool }) { 
        return pgdb(pgPool).getContests(obj);
      }
    }

  }
});
