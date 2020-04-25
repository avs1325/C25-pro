const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var raindrops = {};
var x = 1;
var rain = 1;

function setup() {
  createCanvas(400,400);
 
  engine = Engine.create();
  world = engine.world;
}
function createRain(){
  
}

function draw() {
  background(0, 255, 255); 

  Engine.update(engine);

  if (x === 1) {
    raindrops[rain] = new Rain(random(0,400),0);
    rain = rain + 1;
  }

  for (i = 1; i < rain; i = i + 1){
var rains = raindrops[i];
    rains.display();
}
}