const life = document.getElementById('life');
const x = 2500;
const y = 2500;
const dim = x * y;
let ctx = life.getContext("2d");
let world = ctx.createImageData(x, y);
let binworld = [];
let binworldmat = [];

const genBinWorld = () => {
    for (let i = 0; i < dim; i++) {
        if (Math.random() > 0.25) {
            binworld.push(0);
        } else {
            binworld.push(1);
        }
    }
}

const step = (i) => {
    
    return 1 * (binworld[i-1] + binworld[i+1] + binworld[i-4] + binworld[i+4] + binworld[i-5] + binworld[i-3] + binworld[i+3] + binworld[i+5]) == 3;
}

const genCells = () => {
    for (let i = 0; i < world.data.length; i += 4) {
        if ((i % 4 == 0) && (binworld[i]==1)) {
            world.data[i+0] = 223;
            world.data[i+1] = 221;
            world.data[i+2] = 230;
            world.data[i+3] = 255;
        } else {
            world.data[i+0] = 0;
            world.data[i+1] = 0;
            world.data[i+2] = 0;
            world.data[i+3] = 255;
        }
    }
    ctx.putImageData(world, 0, 0);
}

genBinWorld();
genCells();
setInterval(() => {
    for (let i = 0; i < dim; i++) {
        binworld[i] = step(i);
    }
    genCells();
}, 1);
        