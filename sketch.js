var fixedRect, movingRect;

var o1, o2;

function setup() {
  createCanvas(800,400);
  //fixedRect = createSprite(400, 200, 50, 50);
  //fixedRect.shapeColor = "red"

  //movingRect = createSprite(100,100,80,50);
  //movingRect.shapeColor = "red"
  

  o1 = createSprite (120,0,50,50);
  o1.velocityY = 4; 
  o1.shapeColor = "pink"

  o2 = createSprite(100,400,80,50);
  o2.velocityY = -4;
  o2.shapeColor = "pink"

}

function draw() {
  background(0);
  //movingRect.x = mouseX;
  //movingRect.y = mouseY;

  //console.log(movingRect.x - fixedRect.x)

  if (o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2) {
  o1.velocityX = o1.velocityX * (-1);
  o2.velocityX = o2.velocityX * (-1);
}
if (o1.y - o2.y < o2.height/2 + o1.height/2
  && o2.y - o1.y < o2.height/2 + o1.height/2){
  o1.velocityY = o1.velocityY * (-1);
  o2.velocityY = o2.velocityY * (-1);
}


  
  /*if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }else{
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }*/
  
  drawSprites();
}