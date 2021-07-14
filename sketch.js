var towerimg,tower;
var doorimg,door,doorsGroup;
var climberimg,climber,climberGroup;
var ghostimg,ghost

function preload () {
  towerimg=loadImage("tower.png");
  doorimg=loadImage("door.png");
  climberimg=loadImage("climber.png")
  ghostimg=loadImage("ghost-standing.png")
}

function setup () {
  createCanvas(600,600);
  tower=createSprite( 300,300);
  tower.addImage( towerimg);
  tower.velocityY=1;
  
  doorsGroup=new Group();
  climberGroup=new Group();
  ghost=createSprite(200,200,50,50)  ;
   ghost.scale=0.3;
   ghost.addImage( ghostimg);
  }

function draw(){
  background(0);
  if(tower.y>400) {
    tower.y=300
    
  }
  
  if(keyDown("left")) {
      ghost.x= ghost.x-3
  }
  
  if(keyDown("right")) {
      ghost.x= ghost.x+3
  }
  
  if(keyDown("space")) {
  ghost.velocityY=-5    
  }
  ghost.velocityY=ghost.velocityY+0.8;
  
  createdoors();
  drawSprites();
}
function createdoors() {
  if(frameCount % 240 === 0){
     door=createSprite(200,-50)
    door.addImage(doorimg);
    
    climber=createSprite(200,10);
    climber.addImage(climberimg);
    
     door.x=Math.round(random(120,400)) ;
    door.velocityY=1;
    door.lifetime=800;
    
    climber.x=door.x;
    climber.velocityY=1;
    climber.lifetime=800;
    climberGroup.add(climber) ;
    
    doorsGroup.add(door) ;
  }
  
}