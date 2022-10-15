import HttpStatus from 'http-status';
import { CreateBufferAvatar } from '../Creator.js';
export const AvatarRoute = async (ctx, next) => {
    const buffer = await CreateBufferAvatar();
    ctx.status = HttpStatus.OK;
    ctx.type = "image/png";
    ctx.body = buffer;
    await next();
}