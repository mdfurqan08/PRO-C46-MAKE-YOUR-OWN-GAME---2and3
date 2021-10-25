
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var backImg;
var playerImg;
var player;
function preload()
{
	backImg = loadImage("1.jpg");
	playerImg = loadImage("2.png");
}

function setup() {
	createCanvas(1200, 550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
player = createSprite(100,200,50,50);
player.addImage(playerImg);
player.scale = 0.5
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backImg);
  if(keyDown("UP_ARROW")||touches.length>0){
	player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
   player.y = player.y+30
  }
  drawSprites();
 
}



