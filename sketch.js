
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4
  ground.x = ground.width/2;
  console.log(ground.x);
  
  obstacleGroup = createGroup();
  FoodGroup = createGroup();
}


function draw() {
background("255");
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime, 100,50);
  
  if(keyDown("space")){
    monkey.velocityY=-12;
    
  }
   monkey.velocityY=monkey.velocityY + 0.8;
    monkey.collide(ground);
  
  spawnFood();
 spawnObstacles();
  
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0;
    monkey.velocityY=0;
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
    
    
  }
  
   drawSprites();
}
 


function spawnFood() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
    FoodGroup.add(banana);
  }
}

function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(400,340,10,40);
   obstacle.velocityX = -3
   obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 200;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
 }
}




  






