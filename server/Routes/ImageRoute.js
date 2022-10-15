import HttpStatus from 'http-status';
import { CreateBufferImg } from '../Creator.js';
export const ImageRoute = async (ctx, next) => {
    const { 0: width, 1: height } = ctx.request.params.size.split('x');
    const background = `#${ctx.request.params.bg}`;
    const buffer = CreateBufferImg(Number(width), Number(height), background);
    ctx.status = HttpStatus.OK;
    ctx.type = "image/png";
    ctx.body = buffer;
    await next();
}