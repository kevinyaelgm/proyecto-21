
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var ball;
var radius = 40;



function setup() {
	createCanvas(1600, 1400);



	engine = Engine.create();
	world = engine.world;

var options = {
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2

}

	//crear los cuerpos aquí.

ball = Bodies.circle(260,100,radius/2,options);
World.add(world,ball);
ground = new Ground(width/2,1400,width,20);
leftside = new Ground(1100,1380,20,120);
righttside = new Ground(1500,1380,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius);
ground.display();
leftside.display();
righttside.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{
			x:85,
			y:-85
		})
	}
}

