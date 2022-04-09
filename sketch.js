
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


	Engine = Engine.create();
	World = Engine.world;
	
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
  frictionAir:0.3
}



  Block1=Bodies.circle(220,10,10,Block1_Options);
World.add(World,Block1)	

  Block2=Bodies.rectangle(110,50,10,10,Block2_Options)
World.add(World,Block2)

  Block3=Bodies.rectangle(350,50,10,10,Block3_Options)
World.add(World,Block3)
solo=Bodies.rectangle(400,2,800,2,plane_options)
World.add(World,solo)





	
  


}
function draw() {
  background(lightblue);
  
  drawSprites();
 rect(solo.position.x,solo.position.y,800,-2)
 rectMode(CENTER); 
}



