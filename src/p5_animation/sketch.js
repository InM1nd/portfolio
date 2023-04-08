function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(250);
  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(70);
  pop();
}
