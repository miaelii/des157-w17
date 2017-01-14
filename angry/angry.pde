//Liz Miao
//DES37
//7/8/16
//Ex. 4_2 eyeballs following a mouse


Eye e1, e2, e3;

void setup() {
  size(1024,768);

  noStroke();
  e1 = new Eye( 736,  288, 128);
  e2 = new Eye( 608, 288,  128);  
  
}

void draw() {

  background(255);
  
  pushMatrix();

  translate(0,100);



 pushMatrix();
 translate(599,21);
 rotate((-PI/5));
 arc(0,0,55,210, radians(160), radians(390));
 translate(-30,-15);
 rotate((-PI/4.5));
 arc(0,0,55,210, radians(160), radians(390));
 popMatrix();



  strokeWeight(9);
  stroke(0);
  fill(214,0,18);
  ellipse(544,320,670,602);
  
  e1.update(mouseX, mouseY);
  e2.update(mouseX, mouseY);
 

  e1.display();
  e2.display();
  
  
  fill(0);
  noStroke(); //Right eyebrow
  beginShape();
  vertex(672,224);
  vertex(832,160);
  vertex(864,224);
  vertex(672,272);
  endShape();
  
  beginShape(); //Left eyebrow
  vertex(672,224);
  vertex(512,160);
  vertex(512,224);
  vertex(672,272);
  endShape();
  
  strokeWeight(3); //Beak
  stroke(0);
  fill(247,181,72);
  triangle(672,304,800,416,576,384);
  triangle(576,384,768,416-(32/7),672,480);
 
  
  pushMatrix();
  translate(-15,0);
  fill(0);
  stroke(0);
  strokeWeight(7);
  beginShape(); //top tail
  vertex(192,224);
  vertex(176,256);
  vertex(224,304);
  vertex(224,288);
  vertex(192,224);
  endShape();
  
  beginShape(); //middle tail
  vertex(224,288);
  vertex(128,256);
  vertex(112,320);
  vertex(224,336);
  vertex(224,288);
  endShape();
  
  beginShape(); //bottom tail
  vertex(224,336);
  vertex(192,384);
  vertex(160,368);
  vertex(224,320);
  vertex(224,336);
  endShape();
   popMatrix();
  
  
  popMatrix();
}

class Eye {
  int x, y;
  int size;
  float angle = 0.0;
  
  Eye(int tx, int ty, int ts) {
    x = tx;
    y = ty;
    size = ts;
 }

  void update(int mx, int my) {
    angle = atan2(my-y, mx-x);
  }
  
  void display() {
    pushMatrix();
    translate(x, y);
    fill(255);
    strokeWeight(5);
    stroke(0);
    ellipse(0, 0, size, size);
    rotate(angle);
    noStroke();
    fill(32,136,245); //PUPIL COLOR:
    ellipse(size/6, 0, size/3, size/3);
    popMatrix();
  }
}