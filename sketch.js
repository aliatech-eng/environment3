
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup(){
createCanvas(800,400);
	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(400,height,800,20)

	paper = new Paper(200,200,20,20)
	dustbin = new Dustbin(300,150,20,20)
		
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
drawSprites();  
}
function KeyPressed(){
	if(keyCode === UP_AAROW)
	Matter .Body.applyforce(paperObject.body,paperObject.body.position,{x:85,y:85})
	Matter .Body.setStatic(paper,false)
	
	}