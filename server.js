const express = require('express');
const app = express();
const { CreateBufferImg, CreateBufferVideo, CreateBufferRandom } = require('./Creator.js');

const path = require('path');
const dir = path.join(__dirname, 'build');

const port = process.env.PORT || 3001;


app.use(express.static(dir));


app.get('/image/:size/:bg', (req, res) => {
    const { 0: width, 1: height } = req.params.size.split('x');
    const buffer = CreateBufferImg(Number(width), Number(height), `#${req.params.bg}`);
    const headers = { "Content-Type": "image/png" };
    res.writeHead(200, headers);
    res.end(buffer);
});

app.get('/video/:quality', (req, res) => {
    const buffer = CreateBufferVideo(req.params.quality);
    const headers = { "Content-Type": "image/png" };
    res.writeHead(200, headers);
    res.end(buffer);
});
app.get('/random/:size', (req, res) => {
    const buffer = CreateBufferRandom(req.params.size);
    const headers = { "Content-Type": "image/png" };
    res.writeHead(200, headers);
    res.end(buffer);
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(dir, 'index.html'));
});

app.listen(port, () => console.log(`Puerto: ${port}`));