function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate();
    n = 16;
    initialise(n);
}

function draw() {
    background('#2c3e50');
    
    calcPosition();
    
    for(i = 0; i< n; i++) {
        for(j = 1; j < n; j++) {
            drawLink(i, (i + j) % n);
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
            arOff[i][j] = random(100);
        }
    }
}

function calcPosition() {
    //calculates co-ordinates using noise() and offset values from arOff[]
    arPos = [];
    for(i = 0; i < n; i++) {
        arPos[i] = [];
        arPos[i][0] = noise(arOff[i][0]) * width;
        arPos[i][1] = noise(arOff[i][1]) * height;    
    }
}

function drawLink(h, k) {
    //draws a link between two nodes
    stroke('#ecf0f1');
    strokeWeight(0.5);
    line(arPos[h][0], arPos[h][1], arPos[k][0], arPos[k][1]);
}

function drawNode(x, y) {
    //draws a node using co-ordinates from arPos[]
    noStroke();
    fill('#e74c3c');
    ellipse(x, y, 10, 10);    
}

function increment(inc) {
    //increments offset values
    for(i = 0; i < n; i++) {
        for(j = 0; j < 2; j++) {
            arOff[i][j] += inc;
        }
    }
}
