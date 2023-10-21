let w1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  w1 = new Walker(200, 200);
}

function draw() {
  w1.update();
  w1.display();
}

class Walker {
  constructor(_x, _y) {
    this.posx = _x;
    this.posy = _y;
    this.vel = random(1, 50);
    strokeWeight(5);
    stroke(200, 200, 100);

    this.color = color(150, random(10, 60), random(0, 220));

    this.esCirculo = random() > 0.5 ? true : false;

    // this.esCirculo;
    // this.r = random();
    // if (this.r > 0.5) {
    // 	this.esCirculo = true;
    // } else {
    // 	this.esCirculo = false;
    // }
  }

  update() {
    this.posx += random(-this.vel, this.vel);
    this.posy += random(-this.vel, this.vel);
  }

  display() {
    fill(this.color);
    // noStroke();
    if (this.esCirculo) {
      circle(this.posx, this.posy, 60);
    } else {
      rect(this.posx, this.posy, 10, 10);
    }
  }
}
