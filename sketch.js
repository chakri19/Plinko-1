const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//arrays
var particles = [];
var plinkos = [];
var divisions = [];

var ground;
var divisionHeight = 316;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  //insert all objects before engine.run
  ground = new Ground(width/2,795,480,10);

  //creating the divisions
  for (var k =30; k<=width; k = k+80){
    divisions.push(new Division(k,height = divisionHeight*2,10,divisionHeight));
  }

  //creating the plinkos
  for (var j = 40;j<=width;j = j +50){
    plinkos.push(new Plinko(j,75,10));
  }

  for (var j = 15;j<=width-10;j = j +50){
    plinkos.push(new Plinko(j,175,10));
  }

  for (var j = 40;j<=width;j = j +50){
    plinkos.push(new Plinko(j,275,10));
  }

  for (var j = 15;j<=width;j = j +50){
    plinkos.push(new Plinko(j,375,10));
  }

  Engine.run(engine);
}  

function draw() {
  background(0);  
 
  ground.display();

  //creating the particles
  if (frameCount%20===0){
    particles.push(new Particle(random(10,480),10,10));
  }

  for (var j = 0; j <plinkos.length;j++){
    plinkos[j].display();
  }

  for (var l = 0; l<particles.length;l++){
    particles[l].display();
  }
 
  for (var k = 0; k<divisions.length;k++){
    divisions[k].display();
  }
}