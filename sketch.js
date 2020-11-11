var fixedRect, movingRect;
var r1,r2,r3,r4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  r1 = createSprite(200,300,80,30);
  r1.shapeColor = "green";
  r1.debug = true;
  r2 = createSprite(300,300,80,30);
  r2.shapeColor = "green";
  r2.debug = true;
  r3 = createSprite(400,300,80,30);
  r3.shapeColor = "green";
  r3.debug = true;
  r4 = createSprite(500,300,80,30);
  r4.shapeColor = "green";
  r4.debug = true;
  
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if (isTouching(movingRect,r2)){
  movingRect.shapeColor = "red";
  r2.shapeColor = "red";
 }
 else {
  movingRect.shapeColor = "green";
  r2.shapeColor = "green";
}
  
  drawSprites();
}
function isTouching(o1,o2){
  if (o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2+ o1.width/2
    && o1.y - o2.y < o2.height/2 +o1.height/2
    && o2.y - o1.y < o2.height/2 + o1.height/2) {
  return true;
}
else {
 return false;
}
}