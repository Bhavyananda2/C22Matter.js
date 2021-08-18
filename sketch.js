const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine, world;
var ground, ball

function setup() {
  createCanvas(800,400);
  
  engine=Engine.create();
  world=engine.world;
  
  var groundoptions={
    isStatic : true
  }

  var balloptions={
   restitution : 1.0, 
   density : 0.5
  }
  ground=Bodies.rectangle(400, 380, 800, 20, groundoptions);
  World.add(world,ground)
  console.log(ground)
  
  ball=Bodies.circle(200, 150, 20, balloptions);
  World.add(world, ball)

}

function draw() {
  background("black"); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,800, 20)

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20)
}