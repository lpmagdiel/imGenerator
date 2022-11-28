import HttpStatus from 'http-status';
import { createApi } from 'unsplash-js';
import nodeFetch from 'node-fetch';
import path from 'path';
import fs from 'fs';
import { CreateUnsplashImage } from '../Creator.js';
import { getRndInteger } from "../Helpers/index.js";

const unsplash = createApi({
    accessKey: '61su9EOlRNhrXHItmAeEvRddHPTLw4rKu4hx0kmmkgc',
    fetch: nodeFetch
});

export const RealRoute = async (ctx, next) => {
    const search = await unsplash.search.getPhotos({
        query: ctx.request.params.image,
        page: 1,
        perPage: 10,
        orientation: 'landscape'
    });
    const images = search.response.results.map(image => {
        return {
            image: image.urls.small,
            id: image.id
        }
    });
    const image = images[getRndInteger(0, images.length - 1)];
    const savedImage = await nodeFetch(image.image);
    const writeStream = fs.createWriteStream(`./tmpImages/${image.id}.jpg`);
    savedImage.body.pipe(writeStream);

    const buffer = await CreateUnsplashImage(image.id);
    ctx.status = HttpStatus.OK;
    ctx.type = "image/png";
    ctx.body = buffer;
    await next();
}