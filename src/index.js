import Koa from 'koa';
import mount from 'koa-mount';
import convert from 'koa-convert';
import graphqlHTTP from 'koa-graphql';
import schema from './app/schema.graphql';

var app = new Koa();

app.use(mount('/graphql', convert(graphqlHTTP({
  schema: schema,
  graphiql: true
}))));

app.listen(3333);
