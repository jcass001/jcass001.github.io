var x, y;

function setup() {
  createCanvas(500, 500);
  x = width;
  y = height / 4;
}

function draw() {
	background(19,168,0)


  x = x - 1;
  y = y + random(-1, 1);

  if (x < 0) {
    x = width;
  }
}
