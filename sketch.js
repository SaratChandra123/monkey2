
var monkey , monkey_running
var banana,bananas,bananaImage, obstacle,obstacles, obstacleImage
var FoodGroup, obstacleGroup
var SurvivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 monkey=createSprite(80,315,20,20) 
 monkey.addAnimation("moving",monkey_running)
 monkey.scale=0.1
  
 ground=createSprite(400,350,900,10) 
 ground.velocityX=-4 
 ground.x=ground.width/2
 console.log(ground.x)
  foodGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
background(225)
banana()  ;
obstacle();
if(ground.x<0){
 ground.x=ground.width/2 
}
  
if(keyDown("space")){
  monkey.velocityY=-12    
}
monkey.velocityY=monkey.velocityY+0.8  
  
monkey.collide(ground)  
 drawSprites(); 
  text("Survival Time:"+SurvivalTime,100,50)
  SurvivalTime=Math.ceil(frameCount/frameRate())
}
function banana(){
if (frameCount % 80 === 0){  
bananas=createSprite(600,160,30,30)
bananas.y=Math.round(random(120,200)) 
bananas.addImage(bananaImage)
bananas.scale=0.1
bananas.velocityX=-7
bananas.setLifetime=100
foodGroup.add(bananas) 
}  
}
function obstacle(){
if (frameCount % 80 === 0){  
obstacles=createSprite(600,330,30,30)
obstacles.collide(ground) 
obstacles.addImage(obstacleImage)
obstacles.scale=0.1
obstacles.velocityX=-7
obstacles.setLifetime=100
obstacleGroup.add(obstacles) 
}  
}





