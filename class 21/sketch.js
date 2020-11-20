var fixedRect, movingRect;
var object1,object2,object3,object4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1 = createSprite(150, 800,80,30);
  object1.shapeColor = "green";
  object1.debug = true;
  object2 = createSprite(200, 800,80,30);
  object2.shapeColor = "green";
  object2.debug = true;
  object3 = createSprite(300, 800,80,30);
  object3.shapeColor = "green";
  object3.debug = true;
  object4 = createSprite(100, 800,80,30);
  object4.shapeColor = "green";
  object4.debug = true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  bounceoff(fixedRect,movingRect);
  if (isTouching(movingRect,object1)) {
    movingRect.shapeColor="yellow";
    object1.shapeColor="orange";
  }

  drawSprites();
}

