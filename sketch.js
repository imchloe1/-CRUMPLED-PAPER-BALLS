
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ball_options={
		isStatic:false,
		restitution:0,
		friction:0,
		density:1.2
	}


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ball = Matter.Bodies.circle(30, 100, 25, ball_options);
	World.add(world,ball);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObj=new ground(width/2,670,width,20);
  leftSide = new ground(1100, 600, 20, 120);
  groundObj.display();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
	}
}



