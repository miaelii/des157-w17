// p5 file

// open the console window of any browser to see console.log() messages,
// like prvar() messages in Processing
//console.log("this is a js comment");
//var img;
//var e1, e2;

function setup() {
    createCanvas(800, 250);
     myCanvas.parent('mySketch');
    img = loadImage("angryBird.jpg");
    noStroke();
    e1 = new Eye(390, 126, 80);
 e2 = new Eye(432, 126, 80);
   e3 = new Eye(564, 126, 80);
 e4 = new Eye(606, 126, 80);

}

function draw() {
    // statements here

    e1.update(mouseX, mouseY);
    e2.update(mouseX, mouseY);
    e3.update(mouseX, mouseY);
  e4.update(mouseX, mouseY);
  e1.display();
  e2.display();
  e3.display();
  e4.display();
  image(img, 0, 0);

}

function Eye(tx, ty, ts) {
    this.x = tx;
    this.y = ty;
    this.size = ts;
    this.angle = 0;

    this.update = function(mx, my) {
        this.angle = atan2(my - this.y, mx - this.x);
    };

    this.display = function() {
        push();
        translate(this.x, this.y);
        fill(255);
        ellipse(0, 0, this.size, this.size);
        rotate(this.angle);
        fill(153, 204, 0);
        ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
        pop();
    };
  }
