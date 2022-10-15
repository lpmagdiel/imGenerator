import HttpStatus from 'http-status';
import { CreateBufferVideo } from '../Creator.js';
export const VideoRoute = async (ctx, next) => {
    const buffer = CreateBufferVideo(ctx.request.params.quality);
    ctx.status = HttpStatus.OK;
    ctx.type = "image/png";
    ctx.body = buffer;
    await next();
}