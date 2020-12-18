
var bullet , wall;
 
var speed,weight,thikness;

function setup() {
  createCanvas(800,400);
 
bullet = createSprite(50,200,50,50);

wall = createSprite(700,200,thikness,height/2);
  


}

function draw() {
  background(255,255,255);  

  speed = random(100,200);
  weight = random(30,52);
  thikness = random(22,83);

  bullet.velocityX = speed;

  if(hasCollided(bullet,wall)){

    bullet.velocityX = 0;

  if((bullet.x-wall.x)<(bullet.width/2+wall.width/2)){
   
    var damage = 0.5 * weight * speed * speed/(thikness*thikness*thikness);
    
    if(damage>10){
    
    wall.shapeColor = color(255,0,0);
  
    }
    
    if(damage<10){
    
      wall.shapeColor = color(0,255,0);
  
    }
    
    }

   


  }
  drawSprites();
}

function hasCollided(lbullet,lwall){

bulletRightEdge = lbullet.x + lbullet.width/2; 
wallLeftEdge = lwall.x

if(bulletRightEdge>=wallLeftEdge){

return  true;

}


return false;

}

