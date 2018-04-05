function setup() {
  createCanvas(500, 500);
  background(219, 176, 35)
fill(19,168,0)
beginShape();
vertex(50,50);
vertex(100,50);
vertex(100,100);
vertex(50,100);
vertex(50,50)
endShape();
}

function draw() {
  noStroke()
  fill(219, 176, 35)
  ellipse(mouseX, mouseY, 80, 80);
  }
