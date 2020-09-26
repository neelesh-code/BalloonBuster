var playground, playground_image
var balloon1, balloon1_img
var balloon2, balloon2_img
var balloon3, balloon3_img
var balloon4,balloon4_img
var bow, bow_img
var arrow,arrow_img
var select_balloon
var red, blue, pink, green 
var score
var arrowGroup,redB, blueB, greenB
var yellowB



function preload(){
 //load your images here 
 playground_image=loadImage("background0.png");
  balloon1_img=loadImage("red_balloon0.png");
  balloon2_img=loadImage("blue_balloon0.png");
  balloon3_img=loadImage("pink_balloon0.png");
  balloon4_img=loadImage("green_balloon0.png");
  bow_img=loadImage("bow0.png");
  arrow_img=loadAnimation("arrow0.png");
}

function setup() {
  createCanvas(600, 600);

  //add code here
  balloon();
  playground=createSprite(0,0,600,600);
  playground.addImage("playground",playground_image);
  playground.velocityX=-4;
  playground.scale=3;
  
  playground.x=playground.width/2;
  
  
  bow=createSprite(575,300,20,20);
  bow.addImage("bow",bow_img);
  
    
  arrowGroup = new Group();
  yellowB = new Group();
  redB = new Group();
  blueB = new Group();
  greenB = new Group();
  
}

  score=0;
function draw() {
background(255);
  
  select_balloon=Math.round(random(1,4));
  
  bow.y=World.mouseY;
  
  balloon();
  

  
  
  if(playground.x<0){
    playground.x=playground.width/2;
  }
  
  if(keyDown("space")){
    shoot();
  }
  
    if(arrowGroup.isTouching(redB)){
      arrowGroup.destroyEach();
      redB.destroyEach();
      score=score+3;
    }
  
    if(arrowGroup.isTouching(blueB)){
      arrowGroup.destroyEach();
      blueB.destroyEach();
      score=score+2;
    }
    
  if(arrowGroup.isTouching(greenB)){
    arrowGroup.destroyEach();
    greenB.destroyEach();
    score=score+1;
  }
  
  if(arrowGroup.isTouching(yellowB)){
    arrowGroup.destroyEach();
    yellowB.destroyEach();
    score=score+4;
  }
  

  drawSprites();
  textSize(20);
  text("Score:"+score,500,50);
  

}

function shoot(){
  arrow=createSprite(500,100,20,20);
  arrow.y=bow.y;
  arrow.velocityX=-4;
  arrow.addAnimation("a",arrow_img);
  arrow.scale=0.3 
  arrow.lifetime=150; 
  arrowGroup.add(arrow);
  arrow.debug=true
  arrow.setCollider("rectangle",0,0,arrow.width,100);
  
}

function balloon(){
  if (frameCount%80===0){
    if(select_balloon === 1){
      redBalloon();
    } else if(select_balloon=== 2){
      greenBalloon();
    } else if(select_balloon===3){
      blueBalloon();
    } else if(select_balloon===4){
      yellowBalloon();
    }
  }
}

function redBalloon(){
  red=createSprite(Math.round(random(30,370)),0,10,10)
  red.addImage("b1", balloon1_img);
  red.velocityY=3;
  red.scale=0.1;
  red.lifetime=200;
  redB.add(red);
  red.setCollider("circle",0,0,5); 
}

function blueBalloon(){
  blue=createSprite(Math.round(random(30,370)),0,10,10)
  blue.addImage("b2", balloon2_img);
  blue.velocityY=3;
  blue.scale=0.1;
  blue.lifetime=200;
  blueB.add(blue);
  blue.setCollider("circle",0,0,5); 
}

function yellowBalloon(){
  yellow=createSprite(Math.round(random(30,370)),0, 10, 10);
  yellow.addImage("b3",balloon3_img);
  yellow.velocityY=3;
  yellow.scale=1.3;
  yellow.lifetime=200; 
  yellowB.add(yellow);
  yellow.setCollider("circle",0,0,5); 
}


function greenBalloon(){
  green=createSprite(Math.round(random(30,370)),0,10,10);
  green.addImage("b4", balloon4_img);
  green.velocityY=3;
  green.scale=0.1;
  green.lifetime=200;
  greenB.add(green);
  green.debug=true
  green.setCollider("circle",0,0,5); 
}








    
  

