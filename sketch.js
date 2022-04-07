
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

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
var block1_Options={
  restitution:0.5,
  friction:0.02,
  frictionAir:0
}

var block2_Options={
restitution:0.7,
friction:0.01,
frictionAir:0.1
}

var block3_Options={
  restitution:0.01,
  friction:1,
  frictionAir:0.3
}



block1=Bodies.circle(220,10,10,block1_Options);
World.add(world,block1)	

block2=Bodies.rectangle(110,50,10,10,block2_Options)
World.add(world,block2)

block3=Bodies.rectangle(350,50,10,10,block3_option)
World.add(world,block3)
solo=Bodies.rectangle(400,2,800,2,plane_options)
World.add(world,solo)





	
  


}
function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 rect(solo.position.x,solo.position.y,800,2)
}



