import Koa from 'koa';
import mount from 'koa-mount';
import convert from 'koa-convert';
import graphqlHTTP from 'koa-graphql';

var app = new Koa();

app.use(mount('/graphql', convert(graphqlHTTP(() => null))));

app.listen(3333);
