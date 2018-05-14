import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLNonNull,
    GraphQLString
} from 'graphql';

import ContestStatusType from './ContestStatus';

const ContestType = new GraphQLObjectType({
  name: 'ContestType',

  fields: {
    id: { type: GraphQLID },
    code: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    status: { type: new GraphQLNonNull(ContestStatusType) },
    createdAt: { type: new GraphQLNonNull(GraphQLString) }
  }
});

export default ContestType;
