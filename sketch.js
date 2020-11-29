var wall , car , speed , weight , deformation;

function setup(){
    createCanvas(1600,400);

    speed = random(50,90);
    weight = random(400,1500);
 
    car = createSprite(50,200,50,50);
    car.velocityX = speed;
    
    wall = createSprite(1500,200,60,height/2);

    deformation = 0.5*weight*speed/22500;

}

function draw(){

background(255,255,255);

car.velocityX = speed;

  if (car.x - wall.x < car.width/2 + wall.width/2 &&
      wall.x - car.x < wall.width/2 + car.width/2 ){

    car.velocityX = 0;      
       
     if(deformation<100){
         car.shapeColor = color(0,255,0);
     }
    
    if(deformation>100 && deformation<180){
        car.shapeColor = color(230,230,0);
    }

    if(deformation>180){
        car.shapeColor = color(255,0,0);
    }
  }



drawSprites();
}


