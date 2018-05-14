import graphqlHTTP from 'express-graphql';
import pg from 'pg';
import express from 'express';
import MongoClient from 'mongodb';
import { nodeEnv } from './util';
import newSchema from '../schema/index';
import postgresConfig from '../config/pg';
import mongoConfig from '../config/mongo';

const pgConfig = postgresConfig[nodeEnv];
const mongodbConfig = mongoConfig[nodeEnv];
const pgPool = new pg.Pool(pgConfig);

const app = express();

const port = process.env.port || 3300;

MongoClient.connect(mongodbConfig.url, (error, mongoPool) => {
  // assert.equal(err, null);

  app.use('/graphql', graphqlHTTP({
    schema: newSchema,
    graphiql: true,
    context: { pgPool, mongoPool }
  }));

  app.listen(port, () => {
    console.log(`Running on port ${port}`);
    console.log(`Running in ${nodeEnv} mode...`);
  });
});

