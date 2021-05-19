var wall,wallimg;
var edges;
var macaw,macawflying;
var eagle,eagleflying;
var backg,backgimg;
var obstacle,airplane,helicopter,jet,crane;
var dragonfly,dragonflyimg;
var flypos;
var prey=0;
var Score=0;
var START=1;
var PLAY=2;
var END=0;
var gameState=START;
var starttool,starttoolimg;
var reset,resetimg;
var gameOver,gameOverimg;
var energy,energyimg4,energyimg3,energyimg2,energyimg1,energyimg0;
var energyCount=4;
function preload(){
wallimg=loadImage("wallshort.jpg");
macawFlying=loadAnimation("macawFlying/macawFlying1.png","macawFlying/macawFlying2.png","macawFlying/macawFlying3.png","macawFlying/macawFlying4.png","macawFlying/macawFlying5.png","macawFlying/macawFlying6.png","macawFlying/macawFlying7.png","macawFlying/macawFlying9.png","macawFlying/macawFlying9.png");
  eagleFlying=loadAnimation("eagleFlying/eagleFlying1.png","eagleFlying/eagleFlying2.png","eagleFlying/eagleFlying3.png","eagleFlying/eagleFlying4.png","eagleFlying/eagleFlying5.png","eagleFlying/eagleFlying6.png","eagleFlying/eagleFlying7.png","eagleFlying/eagleFlying8.png","eagleFlying/eagleFlying9.png","eagleFlying/eagleFlying10.png","eagleFlying/eagleFlying11.png","eagleFlying/eagleFlying12.png");
  
  backgimg=loadImage("sky.jpg");
  
  helicopter=loadImage("helicoptertransparent.png");
  airplane=loadImage("planetransparent.png");
  jetplane=loadImage("jetplanetransparent.png");
  
  crane=loadAnimation("craneFlying/craneFlying1.png","craneFlying/craneFlying2.png","craneFlying/craneFlying3.png","craneFlying/craneFlying4.png","craneFlying/craneFlying5.png","craneFlying/craneFlying6.png","craneFlying/craneFlying7.png","craneFlying/craneFlying8.png");
  
  dragonflyimg=loadAnimation("dragonfly/dragonflyFlying1.png","dragonfly/dragonflyFlying2.png","dragonfly/dragonflyFlying3.png","dragonfly/dragonflyFlying4.png","dragonfly/dragonflyFlying5.png","dragonfly/dragonflyFlying6.png","dragonfly/dragonflyFlying7.png","dragonfly/dragonflyFlying8.png","dragonfly/dragonflyFlying9.png","dragonfly/dragonflyFlying10.png","dragonfly/dragonflyFlying11.png","dragonfly/dragonflyFlying12.png");
  
  starttoolimg=loadImage("start button.png");
  resetimg=loadImage("reset button.png");
  gameOverimg=loadImage("gameOvertransparent.png");
  
  energyimg4=loadAnimation("energy-4.png");
  energyimg3=loadAnimation("energy-3.png");
  energyimg2=loadAnimation("energy-2.png");
  energyimg1=loadAnimation("energy-1.png");
  energyimg0=loadAnimation("energy-0.png");
}

function setup() {
 createCanvas(900,550);
  
  backg=createSprite(700,200);
  backg.velocityX=-3;
  backg.addImage(backgimg);
  backg.scale=6.5;
  if(gameState===PLAY || gameState===START){
  macaw=createSprite(400,100,50,20);//400
  macaw.addAnimation("macawFlying",macawFlying);
  macaw.scale=0.3;
  
  
  eagle=createSprite(60,100,70,40);
  eagle.addAnimation("eagleFlying",eagleFlying);
  }
  starttool=createSprite(255,450);
  starttool.addImage(starttoolimg);
  starttool.scale=0.5;
  starttool.visible=false;
  
  reset=createSprite(475,450);
  reset.addImage(resetimg);
  reset.scale=0.4;
  reset.visible=false;
  
  gameOver=createSprite(450,200);
  gameOver.addImage(gameOverimg);
  gameOver.scale=0.5;
  gameOver.visible=false;
  
  energy=createSprite(870,520,20,20);
  energy.scale=0.5;
  if(energyCount===4){
  energy.addAnimation("energyimg4",energyimg4);
  }
  energy.addAnimation("energyimg3",energyimg3);
  energy.addAnimation("energyimg2",energyimg2);
  energy.addAnimation("energyimg1",energyimg1);
  energy.addAnimation("energyimg0",energyimg0);
  
  wallG=createGroup();
  dragonG=createGroup();
  obstaclesGroup=createGroup();
  
}

function draw() {
 background(225)
  if(backg.x<0){
     backg.x=700; 
   }
  macaw.velocityX=0;
  eagle.velocityX=0;
  if(gameState===PLAY){
  Score=Score+Math.round(getFrameRate()/60.1);
  backg.velocityX=-(3+3*Score/100);
  //console.log(macaw.y);
  edges=createEdgeSprites;
  //macaw.collide(edges);
  /*if(frameCount%2===0){
    wall=createSprite(920,390,40,40);
    wall.addImage(wallimg);
    wall.scale=1.8;
    wall.scale=random(0.3,1.3);
    wall.velocityX=-6;
    wall.lifetime=800;
    wallG.add(wall);
    wallopp=createSprite(880,20,40,40);
    wallopp.addImage(wallimg);
    wallopp.scale=1;
    wallopp.scale=random(0,1);
    wallopp.velocityX=-3;
  }*/
  
  if(keyDown("space")){
    macaw.velocityY=-9;
  }
  if(keyDown("left")){
    macaw.velocityX=-2;
  }
  if(keyDown("right")){
    macaw.velocityX=2;
  }
  
  
   macaw.velocityY=macaw.velocityY+1;
  
  /*if(macaw.isTouching(wallG)){
    macaw.velocityY=-20;
  }*/
  
  
  
    
  flypos=Math.round(random(1,2));
  if(frameCount%150===0){
    if(flypos===1){
    dragonfly=createSprite(920,Math.round(random(50,500)),10,10);
    dragonfly.addAnimation("dragonfly",dragonflyimg);
    dragonfly.velocityX=-(5+Score/150);
    dragonfly.scale=0.5;
    dragonfly.lifetime=800;
    dragonG.add(dragonfly);
    }
    if(flypos===2){
      dragonfly=createSprite(-20,Math.round(random(50,500)),10,10);
      dragonfly.addAnimation("dragonfly",dragonflyimg);
      dragonfly.velocityX=(5+Score/150);
      dragonfly.scale=0.5;
      dragonfly.lifetime=800;
      dragonG.add(dragonfly);
    }
  }
  if(dragonG.isTouching(macaw)){
    dragonG.destroyEach();
    prey=prey+1;
  }
  
  
  var select_obstacle=Math.round(random(1,4));
  if(frameCount%250===0){
    
    if(select_obstacle===1){
      obstacle=createSprite(900,Math.round(random(50,500)),40,40);
      obstacle.addImage(helicopter);
      obstacle.velocityX=-(5.5+Score/150);
      obstacle.scale=0.8;
      obstacle.lifetime=800;
      obstaclesGroup.add(obstacle);
      //obstacle.debug=true;
    }
    if(select_obstacle===2){
      obstacle=createSprite(900,Math.round(random(50,500)),40,40);
      obstacle.addImage(airplane);
      obstacle.velocityX=-(7+Score/150);
      obstacle.scale=0.8;
      obstacle.lifetime=800;
      obstaclesGroup.add(obstacle);
      //obstacle.debug=true;
    }
    if(select_obstacle===3){
      obstacle=createSprite(900,Math.round(random(50,500)),40,40);
      obstacle.addImage(jetplane);
      obstacle.velocityX=-(10+Score/150);
      obstacle.lifetime=800;
      obstaclesGroup.add(obstacle);
      //obstacle.debug=true;
      obstacle.setCollider("rectangle",0,0,180,60);
    }
    if(select_obstacle===4){
      obstacle=createSprite(900,Math.round(random(50,500)),40,40);
      obstacle.addAnimation("craneFlying",crane);
      obstacle.velocityX=-(6+Score/150);
      obstacle.lifetime=800;
      obstaclesGroup.add(obstacle);
      //obstacle.debug=true;
      
    }
  }
  if(frameCount%120===0){
    energyCount=energyCount-1;
  }
    console.log(energyCount);
    if(prey%2===0 && prey>0 && energyCount<4){
      energyCount=energyCount+1;
    }
    if(energyCount===4){
    
    energy.changeAnimation("energyimg4");
  }
  if(energyCount===3){
    
    energy.changeAnimation("energyimg3");
  }
  if(energyCount===2){
    
    energy.changeAnimation("energyimg2");
  }
  if(energyCount===1){
    
    energy.changeAnimation("energyimg1");
  }
  if(energyCount===0){
    
    energy.changeAnimation("energyimg0");
  }
  }
  if(obstaclesGroup.isTouching(macaw) || eagle.isTouching(macaw) || macaw.y<-60 || macaw.y>600 || energyCount===0){
        macaw.velocityY=0;
        //obstaclesGroup.velocityX=0;
        gameState=END;
      }
  if(gameState===END){
        reset.visible=true;
        gameOver.visible=true;
        obstaclesGroup.destroyEach();
        dragonG.destroyEach();
        eagle.x=macaw.x;
        eagle.velocityX=3;
    if(mousePressedOver(reset)){
      gameState=START;
      gameOver.visible=false;
      reset.visible=false;
      Score=0;
      prey=0;
      macaw.x=400;
      macaw.y=100;
      eagle.x=60;
      backg.velocityX=-3;
      energyCount=4
    }
    }
  eagle.y=macaw.y;
  if(macaw.x>400){
    eagle.x=macaw.x-340;
  }
  
  drawSprites();
  textSize(20);
  fill("#F5951D");
  text("Score:"+Score,50,20);
  text("Prey:"+prey,810,20);
  text("Energy:",780,525)
  if(gameState===START){
    textSize(40);
    fill("#12439F")
    text("Save the Macaw!",350,80);
    fill("#66BA3F");
    text("Goal-Save this macaw from the eagle",30,200);
    textSize(30);
    fill("#FEF200");
    text("Guidelines",30,250)
    fill("#7F2387");
    textSize(25);
    text("1~Use Space key to make the macaw fly",30,300);
    text("2~Move the macaw with the left and right arrow keys",30,330);
    text("3~Collect dragonflies as prey,to boost your energy",30,360);
    text("4~Beware of the other birds and vehicles in the sky",30,390);
    starttool.visible=true;
    if(mousePressedOver(starttool)){
      gameState=PLAY;
    }
  }
  else{
    starttool.visible=false;
  }
}