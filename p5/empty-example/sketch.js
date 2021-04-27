var scoopY1 =10;
var scoopY2 =130;
//positions of scoops 2 and 3, and subject to move 
function setup() {
  createCanvas(500, 500);
  //canvas size
}

function draw() {
  background(255,192,203);
  //backgorund is pink
  fill("#36FFF6")
  stroke ("#36FFF6")
  ellipse (width/2,height/2,200,200);
  //bottom blue scoop inside of cone
  fill("#FFF4AE");
  stroke ("#FFF4AE");
  triangle (150,290,350,290,250,490);
  //cone
  fill("#36FF8E")
  stroke ("#36FF8E")
  ellipse (width/2,scoopY2,200,200);
  //second green scoop
  fill("#FBC95E")
  stroke ("#FBC95E")
  ellipse (width/2,scoopY1,200,200);
  //top orange scoop
}
function mousePressed(){
scoopY1 = scoopY1+30;
scoopY2 = scoopY2+20;
//scoops 2 and 3 fall but top scoop falls faster than than scoop 2
}