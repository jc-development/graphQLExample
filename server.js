const express = require('express');

const graphql = require('express-session');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphQL-schema/schema');


const localhost = 'mongodb://localhost/bowsdb';
// const stage = 'removed for privacy';
// const production = 'removed for privacy';

const mongoDbUrl = localhost;


const mongoose = require('mongoose');

const helmet = require('helmet');
const seeder = require('./seed/index-seed');

const app = express()

mongoose.Promise = global.Promise;

mongoose.connect(mongoDbUrl, {useNewUrlParser: true, useUnifiedTopology: true} );
mongoose.connection
  .on( 'error', error => console.log('Error connecting to the database: ', error) )
  .once('open', () => {
    console.log('mongo connected');
    // seeder.check();
  }
);

app.use( helmet() );

app.use('/', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.header('Access-Control-Allow-Credentials', true);
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use('/', graphqlHTTP({
  schema,
  graphiql: false
}));


app.listen(process.env.PORT || 3000, () => {
  console.log('Elite backend is listening on port 3000');
});
