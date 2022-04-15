
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world
var Block1
var Block2
var Block3
var solo

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
//Crie os Corpos Aqui.
var plane_options={
isStatic: true
}
var Block1_Options={
  restitution:0.5,
  friction:0.02,
  frictionAir:0
}

var Block2_Options={
restitution:0.7,
friction:0.01,
frictionAir:0.1
}

var Block3_Options={
  restitution:0.01,
  friction:1,
  
}



  Block1=Bodies.circle(220,10,10,Block1_Options);
World.add(world,Block1)	

  Block2=Bodies.rectangle(110,50,10,10,Block2_Options)
World.add(world,Block2)

  Block3=Bodies.rectangle(350,50,10,10,Block3_Options)
World.add(world,Block3)
solo=Bodies.rectangle(400,height-2,800,2,plane_options)
World.add(world,solo)





	
  


}
function draw() {
  background("lightblue");
  Engine.update(engine)
  rectMode(CENTER)
  drawSprites();
 rect(solo.position.x,solo.position.y,800,2)
ellipse(Block1.position.x,Block1.position.y,10)
rect(Block2.position.x,Block2.position.y,10,10)
rect(Block3.position.x,Block3.position.y,10,10)

 
}



