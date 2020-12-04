
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine;
var world;
var dustbin1, ground1, paper;
function preload()
{
	
}

function setup() {
	createCanvas(600, 600);
    engine = Engine.create();
    world = engine.world;

    //dustbin1 = new Dustbin(200,200,50,50);
    ground1 = new Ground(width/2,50,width,20);
    paper = new Paper(500,500,20);

	//Create the Bodies Here.
    var render = Render.create({
    element : document.body,
    engine : engine,
    options : {
    width : 600,
    height :600,
    wireframes : false
    }
    });

	Engine.run(engine);
  
}


function draw() {

  background(0);
  ground1.display();
  //dustbin1.display();
  paper.display();

}



