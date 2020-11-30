var wall
var car
var speed
var weight


function setup() {
  createCanvas(1280,400);

  wall=createSprite(1200, 200, 50, 200);
  wall.shapeColor="white"

  speed=random(55,90)
  weight=random(400,1500)

 car=createSprite(50,200,50,50)
 car.shapeColor="white"
 car.velocityX=speed 

 
  
}

function draw() {
  background("black");  

 

  if(wall.x-car.x < (car.width+wall.width)/2 ){
    car.velocityX=0
    car.collide(wall)
    var deformation=0.5*weight*speed*speed/22500

    if(deformation>180){
    car.shapeColor="red"
     }

     if(deformation<180 && deformation>100){
      car.shapeColor="yellow"
       }

       if(deformation<100){
        car.shapeColor="green"
         }

        
  }

  drawSprites();

  textSize(40)
  fill("blue")
  text("Car Reliability Test",500,60)

  

}