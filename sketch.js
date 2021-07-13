var shipImage,ship
var seaImage,sea
function preload(){
seaImage=loadImage("sea.png")
shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")


}

function setup(){
  createCanvas(900,900);
  sea=createSprite(0,400,20,20)
  sea.addImage(seaImage)
  sea.scale=0.5
  sea.velocityX=5
  ship=createSprite(200,500,20,20)
 ship.addAnimation("moving ship",shipImage)
 ship.scale=0.3
}

function draw() {
  background("blue");
 drawSprites ()
 if(sea.x>900){
   sea.x=400
 }
}