var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1;
var box2;
var box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
helicopterIMG=loadImage("helicopter.png")
packageIMG=loadImage("package.png")
}

function setup() {
createCanvas(800, 700);
rectMode(CENTER);
	
packageSprite=createSprite(width/2, 80, 10,10);
packageSprite.addImage(packageIMG)
packageSprite.scale=0.2

helicopterSprite=createSprite(width/2, 200, 10,10);
helicopterSprite.addImage(helicopterIMG)
helicopterSprite.scale=0.6
	
groundSprite=createSprite(width/2, height-35, width,10);
groundSprite.shapeColor=color(255,102,0);

engine = Engine.create();
world = engine.world;

packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
World.add(world, packageBody);
	
//Create a Ground
ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
World.add(world, ground);
	 
box1 = new Box(510,610,20,100);
box2 = new Box(290,610,20,100);
box3 = new Box(400,649,200,20);
	 
Engine.run(engine);
}

function draw() {
rectMode(CENTER);
background(0);

packageSprite.x= packageBody.position.x 
packageSprite.y= packageBody.position.y

box1.display();
box2.display();
box3.display();

drawSprites();

Engine.update(engine);
}

function keyPressed() {
if (keyCode === DOWN_ARROW) {
//the package body fall only on press of the Down arrow key.
Matter.Body.setStatic(packageBody,false);
}
}



