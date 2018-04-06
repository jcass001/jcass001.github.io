function setup() {
  createCanvas(500, 500);
  background(19,168,0)
  fill(19,168,0)
  beginShape();
  vertex(100,100);
  vertex(150,50);
  vertex(150,75);
  vertex(200,50);
  vertex(200,75);
  vertex(250,50);
  vertex(250,100);
  vertex(100,100);
  endShape();

  fill(19,168,0)
  beginShape();
  vertex(300,300);
  vertex(350,250);
  vertex(350,275);
  vertex(400,250);
  vertex(400,275);
  vertex(450,250);
  vertex(450,300);
  vertex(300,300);
  endShape();

  fill(19,168,0)
  beginShape();
  vertex(100,400);
  vertex(150,350);
  vertex(150,375);
  vertex(200,350);
  vertex(200,375);
  vertex(250,350);
  vertex(250,400);
  vertex(100,400);
  endShape();
}

function draw() {
  noStroke()
  fill(219, 176, 35)
  ellipse(mouseX, mouseY, 25, 25);
  }
