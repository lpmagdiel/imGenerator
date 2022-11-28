import Koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';
import mount from 'koa-mount';
import BodyParser from 'koa-bodyparser';
import { ImageRoute, VideoRoute, RandomRoute, RealRoute, AvatarRoute } from './Routes/index.js';
const APP = new Koa();
const PORT = process.env.PORT || 3001;
const PATH = './dist';

/* static React routes */
const static_pages = new Koa();
static_pages.use(serve(PATH)); // <== serve the build directory
APP.use(mount("/", static_pages));

APP.use(BodyParser());

const router = new Router();

router.get("/image/:size/:bg", ImageRoute);
router.get("/video/:quality", VideoRoute);
router.get("/random/:size", RandomRoute);
router.get("/avatar", AvatarRoute);
router.get("/real/:image", RealRoute);

APP.use(router.routes()).use(router.allowedMethods());

APP.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});