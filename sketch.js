function setup() {
  createCanvas(400,400);
 fixrect= createSprite(200, 200, 50, 50);
 movingrect=createSprite(200,200,60,70);
}

function draw() {
  background(0);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(fixrect.x-movingrect.x<movingrect.width/2+fixrect.width/2 &&
    movingrect.x-fixrect.x<movingrect.width/2+fixrect.width/2 &&
    fixrect.y-movingrect.y<movingrect.height/2+fixrect.height/2 &&
    movingrect.y-fixrect.y<movingrect.height/2+fixrect.height/2)
    {
      movingrect.shapeColor="red";
      fixrect.shapeColor="red";
    }
    else {
      movingrect.shapeColor="green";
      fixrect.shapeColor="green";
    }
  drawSprites();
}