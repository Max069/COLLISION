
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(200, 100, 50, 50);
  fixedRect.shapeColor = "green";

  fixedRect2 = createSprite(900,100,50,50);
  fixedRect2.shapeColor = "green";

  fixedRect3 = createSprite(200,600,50,50)
  fixedRect3.shapeColor = "green"
  
  fixedRect4 = createSprite(900,600,50,50)
  fixedRect4.shapeColor = "green"
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  
  else if(isTouching(movingRect,fixedRect2)){
    movingRect.shapeColor = "blue";
    fixedRect2.shapeColor = "blue";
  }

  else if(isTouching(movingRect,fixedRect3)){
    movingRect.shapeColor = "yellow";
    fixedRect3.shapeColor = "yellow";
  }

  else if(isTouching(movingRect,fixedRect4)){
    movingRect.shapeColor = "green";
    fixedRect4.shapeColor = "green";
  }

  else {
    movingRect.shapeColor = "white";
    fixedRect.shapeColor = "white";
    fixedRect2.shapeColor = "white";
    fixedRect3.shapeColor = "white";
    fixedRect4.shapeColor = "white";
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}



