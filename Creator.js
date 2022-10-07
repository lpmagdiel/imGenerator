const { registerFont, createCanvas } = require("canvas");
registerFont('IBMPlexMono-Bold.ttf', { family: 'IBMPlexMono' });
const allColors = ["#a93226", "#cb4335", " #884ea0 ", " #6c3483 ", " #2471a3 ", " #2e86c1 ", " #17a589 ", "#117a65", "#229954", "#2ecc71", "#f1c40f", "#d68910", "#ba4a00", "#b3b6b7", "#717d7e", "#34495e", "#a2d9ce", "#d98880"];

/**
 * 
 * @param {string} quality 
 * @returns 
 */
function getQualityVideo(quality) {
    const resolution = { width: 640, height: 480 };
    switch (quality) {
        case 'SD':
            resolution.width = 640;
            resolution.height = 480;
            break;
        case 'HD':
            resolution.width = 1280;
            resolution.height = 720;
            break;
        case 'FHD':
            resolution.width = 1920;
            resolution.height = 1080;
            break;
        case 'QHD':
            resolution.width = 2560;
            resolution.height = 1440;
            break;
        case '2K':
            resolution.width = 2048;
            resolution.height = 1080;
            break;
        case '4K':
            resolution.width = 3840;
            resolution.height = 2160;
            break;
        case '8K':
            resolution.width = 7680;
            resolution.height = 4320;
            break;
    }
    return resolution;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getSize(size) {
    let outSize = 200;
    if (size === 'small') outSize = getRndInteger(80, 500);
    else if (size === 'medium') outSize = getRndInteger(500, 1000);
    else outSize = getRndInteger(1000, 2000);
    return outSize;
}

/**
 * 
 * @param {number} width 
 * @param {number} height 
 * @param {string} background 
 * @returns {any}
 */
function CreateBufferImg(width, height, background) {
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, width, height);
    const fontSize = (width < height) ? (width / 8) : (height / 8);
    ctx.font = `${fontSize}px "IBMPlexMono"`;
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillText(`${width}X${height}`, width / 2, (height / 2) + (fontSize / 2));
    return canvas.toBuffer("image/png");
}
/**
 * 
 * @param {string} quality 
 * @returns {any}
 */
function CreateBufferVideo(quality) {
    const { width, height } = getQualityVideo(quality);
    const colors = ['#FFFFFF', '#F4F709', '#10CBF5', '#3AF708', '#E207F7', '#F70809', '#1F08F8']; // 7
    const barSize = parseInt(width / colors.length);
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    for (let i = 0; i < colors.length; i++) {
        ctx.fillStyle = colors[i];
        ctx.fillRect(i * barSize, 0, (i < colors.length - 1) ? barSize : barSize + 10, height);
    }
    const fontSize = (width < height) ? (width / 8) : (height / 8);
    ctx.font = `${fontSize}px Arial`;
    ctx.textAlign = "center";
    const textWidth = ctx.measureText(quality).width;
    ctx.fillStyle = 'black';
    ctx.fillRect((width / 2) - (textWidth / 2), ((height / 2) - (fontSize / 2) + 10), textWidth, fontSize);
    ctx.fillStyle = "white";
    ctx.fillText(quality, width / 2, (height / 2) + (fontSize / 2));
    return canvas.toBuffer("image/png");
}

/**
 * 
 * @param {string} size 
 * @returns {any}
 */
function CreateBufferRandom(size) {
    const RdmSize = getSize(size);
    const color = getRndInteger(0, allColors.length - 1);
    return CreateBufferImg(RdmSize, RdmSize, allColors[color]);
}

module.exports = { CreateBufferImg, CreateBufferVideo, CreateBufferRandom };