function setup() {
  createCanvas(500, 500);
  background(219, 176, 35)
beginShape();
vertex(50,50);
vertex(40,60);
vertex(45,55);
vertex(50,50);
// etc;
endShape();
}

function draw() {
  noStroke()
  fill(219, 176, 35)
  ellipse(mouseX, mouseY, 80, 80);
  }
