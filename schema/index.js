const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql');

const RootQueryObject = new GraphQLObjectType({
    name: 'RootQueryObject',
    fields: {
        hello: {
            type: GraphQLString,
            description: 'The *mandatory Hello world field',
            resolve: () => 'world'
        }
    }
});

const newSchema = new GraphQLSchema({
    query: RootQueryObject
});

module.exports = newSchema;
