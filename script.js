function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate();
    n = 16;
    initialise(n);
}

function draw() {
    background('#2c3e50');
    for(i = 0; i < n; i++) {
        for(j = 0; j < 2; j++) {
            drawNode(arOff[i][0], arOff[i][1]);
        }
    }
    increment(0.01);  
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function initialise() {
    //initialises random offset values
    arOff = [];
    for(i = 0; i < n; i++) {
        arOff[i] = [];
        for(j = 0; j < 2; j++) {
            arOff[i][j] = random(100);
        }
    }
}

function drawNode(xoff, yoff) {
    //draws a node using noise function and offset values
    x = noise(xoff) * width;
    y = noise(yoff) * height;
    
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
