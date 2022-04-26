const width = window.innerWidth;
const height = window.innerHeight;
let world = [];
let spacer;
let time;

function setup() {
    createCanvas(width, height);
    for (let i = 0; i < width; i++) {
	world[i] = [];
	for (let j = 0; j < height; j++) {
	    world[i][j] = random(255);
	}
    }

    spacer = 10;
    time = 0;
    frameRate(60);
}

/* Simple dot background */
function dotbg() {
    for (let i = 0; i < width; i += spacer) {
	for (let j = 0; j < height; j += spacer) {
	    world[i][j]++;
	    stroke(world[i][j] % 255);
	    point(i + spacer / 2, j + spacer / 2);
	}
    }
}

function draw() {
    time++;
    background(0);
    dotbg();
}


