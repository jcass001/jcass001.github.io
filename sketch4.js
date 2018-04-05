function setup() {
  createCanvas(500, 500);
  background(219, 176, 35)
beginShape();
vertex(50,50);
vertex(60,60);
vertex(40,40);
vertex(50,50);
// etc;
endShape();
}

function draw() {
  noStroke()
  fill(219, 176, 35)
  ellipse(mouseX, mouseY, 80, 80);
  }
