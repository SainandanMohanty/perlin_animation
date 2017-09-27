function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate();
    initialise();
}

function draw() {
    background('#2c3e50');
    node(xoff, yoff);
    increment(0.01);  
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function initialise() {
    //initialises random offset values 
    xoff = random(100);
    yoff = random(100);
}

function node(xoff, yoff) {
    //draws a node using noise function and offset values
    x = noise(xoff) * width;
    y = noise(yoff) * height;
    
    noStroke();
    fill('#e74c3c');
    ellipse(x, y, 10, 10);    
}

function increment(inc) {
    //increments offset values
    xoff += inc;
    yoff += inc;
}
