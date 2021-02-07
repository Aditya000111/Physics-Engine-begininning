const Engine = Matter.Engine;
const World = Matter.World;
 const Bodies = Matter.Bodies;
var Engine1,world; 
var ground;
var ball;

function setup() {
  createCanvas(800,400);
  Engine1 = Engine.create()
 world = Engine1.world;
 var options = {
   isStatic:true
 }

var ball_options = {
  restitution:2
}

 ground = Bodies.rectangle(400,390,800,20, options)
 World.add(world, ground)
 ball = Bodies.rectangle(400,205,50,50, ball_options);
 World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(Engine1);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800,20);
  rect(ball.position.x, ball.position.y,50,50)
}