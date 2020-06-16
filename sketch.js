var car,wall;
var speed,weigth;

function setup() {
  createCanvas(1600,400);
speed=random(55,90);
weigth=random(400,1500);
 var car= createSprite(50, 200, 50, 50);
 var wall=createSprite(1500,200,60,height/2);
}

function draw() {
  background(255,255,255);  
  car.velocityX=speed;
  if (wall.x-car.x<(car.width+wall.width)/2) {
    car.velocityX=0;
    var d=0.5*wieght*speed*speed/22509;

    if (d>180) {
      car.shapeColor=color(255,0,0);
    }
    if (d<180 && d>100) {
      car.shapeColor=color(230,230,0);
    }
    if (d<100) {
      car.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}