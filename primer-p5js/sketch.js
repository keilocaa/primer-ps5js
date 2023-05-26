let angle = 0;
const squareSize = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  rotate(angle);

  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(0, 0, squareSize, squareSize);

  ellipseMode(CENTER);
  fill(255);
  stroke(0);
  strokeWeight(0);
  circle(0, 0, 50);
  translate(width / 2, height / 2);

  translate(width / 2, height / 2);
  
  rotate(angle);
  
 
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(0, 0, squareSize, squareSize);
  angle += 0.01;
}
