let W1;

function setup() {
  Walker.setup();
}

function draw() {
  Walker.draw();
}

class Walker {
  constructor(_x, _y) {
    this.posx = _x;
    this.posy = _y;
    this.vel = random(1, 10);
    this.color = color(255, random(0, 200), random(0, 200));
  }

  update() {
    this.posx += random(-this.vel, this.vel);
    this.posy += random(-this.vel, this.vel);
  }

  display() {
    fill(this.color);
    noStroke();
    circle(this.posx, this.posy, 10);
  }

  static setup() {
    createCanvas(windowWidth, windowHeight);
    W1 = new Walker(200, 200);
  }

  static draw() {
    W1.update();
    W1.display();
  }
}
