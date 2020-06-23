var car,car2,car3,car4,wall;
var speed,speed2,speed3,speed4,weigth;

function setup() {
  createCanvas(1600,600);
speed=random(55,90);
speed2=random(55,90);
speed3=random(55,90);
speed4=random(55,90);
weigth=random(400,1500);
car= createSprite(50, 200, 50, 50);
car2= createSprite(50, 100, 50, 50);
car3= createSprite(50, 300, 50, 50);
car4= createSprite(50, 400, 50, 50);
wall=createSprite(1500,200,60,height);
}

function draw() {
  background(255,255,255);  
  car.velocityX=speed;

  if (wall.x-car.x<(car.width+wall.width)/2) {
    car.velocityX=0;
    var d=0.5*weigth*speed*speed/22509;

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

  car2.velocityX=speed;
  if (wall.x-car2.x<(car2.width+wall.width)/2) {
    car2.velocityX=0;
    var d=0.5*weigth*speed2*speed2/22509;

    if (d>180) {
      car2.shapeColor=color(255,0,0);
    }
    if (d<180 && d>100) {
      car2.shapeColor=color(230,230,0);
    }
    if (d<100) {
      car2.shapeColor=color(0,255,0);
    }
  }

  car3.velocityX=speed;
  if (wall.x-car3.x<(car3.width+wall.width)/2) {
    car3.velocityX=0;
    var d=0.5*weigth*speed3*speed3/22509;

    if (d>180) {
      car3.shapeColor=color(255,0,0);
    }
    if (d<180 && d>100) {
      car3.shapeColor=color(230,230,0);
    }
    if (d<100) {
      car3.shapeColor=color(0,255,0);
    }
  }

  car4.velocityX=speed;
  if (wall.x-car.x<(car.width+wall.width)/2) {
    car4.velocityX=0;
    var d=0.5*weigth*speed4*speed4/22509;

    if (d>180) {
      car4.shapeColor=color(255,0,0);
    }
    if (d<180 && d>100) {
      car4.shapeColor=color(230,230,0);
    }
    if (d<100) {
      car4.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}