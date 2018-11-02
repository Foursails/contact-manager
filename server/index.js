const Koa = require('koa');
const static = require('koa-static');
const send = require('koa-send');
const { port } = require('./env.json');

const app = new Koa();

// Serve static content.
app.use(static(`${__dirname}/../`));

// Redirect unhandled requests to index.html, for push state.
app.use(async (ctx, next) => send(ctx, 'index.html'));

console.log(`App listening on port ${port}.`);
app.listen(port);
