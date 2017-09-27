function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate();
    n = 32;
    initialise(n);
}

function draw() {
    background(44, 62, 80);
    
    calcPosition();
    
    for(i = 0; i< n; i++) {
        for(j = (i + 1); j < n; j++) {
            drawLink(i, j);
        }
    }
    
    for(i = 0; i < n; i++) {
        drawNode(arPos[i][0], arPos[i][1]);
    }
    
    increment(0.001);  
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function initialise() {
    //initialises an array of random offset values
    arOff = [];
    for(i = 0; i < n; i++) {
        arOff[i] = [];
        for(j = 0; j < 2; j++) {
            arOff[i][j] = random(1000);
        }
    }
}

function calcPosition() {
    //calculates co-ordinates using noise() and offset values from arOff[]
    arPos = [];
    for(i = 0; i < n; i++) {
        arPos[i] = [];
        arPos[i][0] = map(noise(arOff[i][0]), 1/4, 3/4, 0, width);
        arPos[i][1] = map(noise(arOff[i][1]), 1/4, 3/4, 0, height);    
    }
}

function drawLink(h, k) {
    //draws a link between two nodes
    windowDiagonal = dist(0, 0, width, height);
    proximity = 1 / dist(arPos[h][0], arPos[h][1], arPos[k][0], arPos[k][1]);
    
    stroke(236, 240, 241, proximity * windowDiagonal);
    strokeWeight(min(proximity * windowDiagonal / 32, 16));
    line(arPos[h][0], arPos[h][1], arPos[k][0], arPos[k][1]);
}

function drawNode(x, y) {
    //draws a node using co-ordinates from arPos[]
    noStroke();
    fill(231, 76, 60);
    ellipse(x, y, 8, 8);    
}

function increment(inc) {
    //increments offset values
    for(i = 0; i < n; i++) {
        for(j = 0; j < 2; j++) {
            arOff[i][j] += inc;
        }
    }
}
