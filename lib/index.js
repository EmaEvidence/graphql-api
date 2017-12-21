const { nodeEnv } = require('./util');
console.log(`Running in ${nodeEnv} mode...`);

const newSchema = require('../schema/index');
const { graphql } = require('graphql');
const graphqlHTTP = require('express-graphql');

const app = require('express')();

// graphql(newSchema, query).then(result => {
//     console.log(result);
// }).catch(error => {
//     console.log(error);
// })

app.use('/graphql', graphqlHTTP({
    schema: newSchema,
    graphiql: true
}))

const port = process.env.port || 3300;

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});