function setup() {
  createCanvas(500, 500);
  background(83, 84, 86)
  fill(19,168,0)
  beginShape();
  vertex(200,300);
  vertex(250,250);
  vertex(250,275);
  vertex(300,250);
  vertex(300,275);
  vertex(350,250);
  vertex(350,300);
  vertex(200,300);
  endShape();
}

function draw() {
  noStroke()
  fill(83, 84, 86)
  ellipse(mouseX, mouseY, 25, 25);
  }
