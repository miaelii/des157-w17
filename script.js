// p5 file

// open the console window of any browser to see console.log() messages,
// like prvar() messages in Processing
//console.log("this is a js comment");


function setup() {
    var myCanvas=createCanvas(800, 250);

     //myCanvas.parent('mySketch');
myCanvas.parent('mySketch');
      background(38,34,98);
    noStroke();
    e1 = new Eye(186, 122 , 40);
 e2 = new Eye(228, 122, 40);

}

function draw() {
    // statements here
    translate(0,9);
    push(); //feathers
    fill(0);
    translate(190,41);
    rotate((-PI/5));
    arc(0,0,55/2,210/2, radians(160), radians(390));
    translate(-25,-15);
    rotate((-PI/4.5));
    arc(0,0,55/2,210/2, radians(160), radians(390));
    pop();

    strokeWeight(5); //body
  stroke(0);
  fill(214,0,18);
  ellipse(168,132,216,194);


    e1.update(mouseX, mouseY);
    e2.update(mouseX, mouseY);

  e1.display();
  e2.display();


  fill(0);
    noStroke(); //Right eyebrow
    beginShape();
    vertex(204.5,115.5);
    vertex(204.5,105.5);
    vertex(265,85.5);
    vertex(266.5,99.5);
    endShape();

    beginShape(); //Left eyebrow
    vertex(204.5,115.5);
    vertex(204.5,105.5);
    vertex(159.5,85.5);
    vertex(159.5,102);
    endShape();

    strokeWeight(3); //Beak
    stroke(0);
    fill(247,181,72);
    triangle(176,150,204.5,125,244,159);
    triangle(176,150,236,158,205.5,179);


    push();
    translate(-15,0);
    fill(0);
    stroke(0);
    strokeWeight(7);
    beginShape(); //top tail
    vertex(70.5,119);
    vertex(61,101.5);
    vertex(54.5,113);
    vertex(58.5,117.5);


    vertex(39.5,111.5);//middle tail
    vertex(34,135);
    vertex(63,138.5);
    vertex(49,149.5);
    vertex(61.5,155.5);

    vertex(70,143);//bottom tail
    vertex(70.5,119);
    endShape();
     pop();


    pop();
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
         strokeWeight(3);
        ellipse(0, 0, this.size, this.size);
        rotate(this.angle);
        noStroke();
        fill(32,136,245); //PUPIL COLOR:
        ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
        pop();
    };
  }
