import cors from '@koa/cors';
import Router from '@koa/router';
import Koa from 'koa';
import bodyparser from 'koa-bodyparser';

import { data } from './data';

const server = new Koa();
const router = new Router();

router.post('/v1/selfie', (ctx) => {
  ctx.res.statusCode = 200;
  ctx.body = data;
});

server
  .use(cors())
  .use(bodyparser())
  .use(router.routes())
  .use(router.allowedMethods());

server.listen(8000);
