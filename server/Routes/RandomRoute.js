import HttpStatus from 'http-status';
import { CreateBufferRandom } from '../Creator.js';
export const RandomRoute = async (ctx, next) => {
    const buffer = CreateBufferRandom(ctx.request.params.size);
    ctx.status = HttpStatus.OK;
    ctx.type = "image/png";
    ctx.body = buffer;
    await next();
}