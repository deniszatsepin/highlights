var Koa = require('koa');
var mount = require('koa-mount');
var convert = require('koa-convert');
var graphqlHTTP = require('koa-graphql');
var schema = require('./app/schema');

var app = new Koa();

app.use(mount('/graphql', convert(graphqlHTTP({
  schema: schema,
  graphiql: true
}))));

app.listen(3333);
