const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
    dustbinn=new dustbin()
	paperObject=new paper(200,450,40);
	groundObject=new ground();
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  paperObject.display();
  groundObject.display();
  dustbinn.display()
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {	
		  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:60,y:-75});  
  	}
}





