var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200,200,90,20);
  fixedRect.shapeColor= "green";
  fixedRect.debug= true;
  movingRect= createSprite(400,200,50,50);
  movingRect.shapeColor= "green";
  movingRect.debug= true;
}

function draw() {
  background(0);
  console.log(movingRect.x- fixedRect.x);
  movingRect.x= World.mouseX;
  movingRect.y= World.mouseY;  

  if(movingRect.x- fixedRect.x< fixedRect.width/2+ movingRect.width/2 &&
    fixedRect.x-movingRect.x< fixedRect.width/2+ movingRect.width/2&&
    movingRect.y- fixedRect.y< fixedRect.width/2+ movingRect.width/2&&
    fixedRect.y-movingRect.y< fixedRect.width/2+ movingRect.width/2){
    fixedRect.shapeColor= "red";
    movingRect.shapeColor= "red";
  }


  else{
    fixedRect.shapeColor= "green";
    movingRect.shapeColor= "green";
  }



  drawSprites();
}