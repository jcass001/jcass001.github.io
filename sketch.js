var x, y;

function setup() {
  createCanvas(700, 700);
	img = loadImage("puriPuriPrisoner.png");
  x = width;
  y = height / 4;
}

function draw() {
	background(240,248,255)

	image(img, x, y);

  x = x - 1;
  y = y;

  if (x < 0) {
    x = width;
  }
}
