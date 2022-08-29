const express = require('express');
const app = express();
const { createCanvas } = require("canvas");

const path = require('path');
const dir = path.join(__dirname, 'build');

const port = 3000;

app.use(express.static(dir));

app.get('/:size/:bg', (req, res) => {
    const { 0: width, 1: height } = req.params.size.split('x');
    const canvas = createCanvas(Number(width), Number(height));
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#' + req.params.bg;
    ctx.fillRect(0, 0, width, height);
    const fontSize = (width < height) ? (width / 8) : (height / 8);
    ctx.font = `${fontSize}px Arial`;
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillText(req.params.size, width / 2, (height / 2) + (fontSize / 2));
    const buffer = canvas.toBuffer();
    const headers = { "Content-Type": "image/png" };
    res.writeHead(200, headers);
    res.end(buffer);
});
app.get('/', (req, res) =>{
    res.sendFile(path.join(dir, 'index.html'));
});

app.listen(port, () => console.log(`Puerto: ${port}`));