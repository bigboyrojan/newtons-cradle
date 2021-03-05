
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var house;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  bobDiameter = 40;
	//Create the Bodies Here.
bob1 = new bob(250,550,30);
bob2 = new bob(305,550,30);
bob3 = new bob(360,550,30);
bob4 = new bob(415,550,30);
bob5 = new bob(470,550,30);
house = new roof(350,100,350,50);
rope1 = new chain(bob1.body,house.body,-bobDiameter*2,0);
rope2=new chain(bob2.body,house.body,-bobDiameter*1, 0)
	rope3=new chain(bob3.body,house.body,0, 0)
	rope4=new chain(bob4.body,house.body,bobDiameter*1, 0)
	rope5=new chain(bob5.body,house.body,bobDiameter*2, 0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,192,203);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
house.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
  drawSprites();
 
}


function keyPressed () {
if(keyCode === UP_ARROW){
Matter.Body.applyForce(bob1.body,bob1.position,{x:-50,y:-45});
}
}
