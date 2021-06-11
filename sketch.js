const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var holder, ball, ground;
var stand1, stand2;
var ball, slingshot;
var polygonImg;


function preload() {
  polygonImg = loadImage("polygon.png");
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1500,600);
  ground1 = new Ground();
  stand1 = new Ground(900,195,200,10);
  stand2 = new Ground(750, 600, 1500, 10);
      
  //level one
  block1 = new Box(600,260,30,40);
  block2 = new Box(570,260,30,40);
  block3 = new Box(540,260,30,40);
  block4 = new Box(630,260,30,40);
  block5 = new Box(660,260,30,40);
  block6 = new Box(585,220,30,40);
  block7 = new Box(555,220,30,40);
  //level two
  block8 = new Box(615,220,30,40);
  block9 = new Box(645,220,30,40);
  block10 = new Box(600,170,30,40);
  block11 = new Box(570,180,30,40);
  block12 = new Box(630,180,30,40);
  block13 = new Box(600,140,30,40);

  //level three
  block14 = new Box(900,170,30,40);
  block15 = new Box(930,170,30,40);
  block16 = new Box(870,170,30,40);
  block17 = new Box(840,170,30,40);
  //top
  block18 = new Box(960,170,30,40);
  block19 = new Box(900,140,30,40);
  block20 = new Box(930,140,30,40);
  block21 = new Box(870,140,30,40);
  block22 = new Box(900,110,30,40);
    
  ball = Bodies.circle(50,200,20);
  World.add(world, ball);
    
  slingshot = new SlingShot (this.ball, {x:100, y:200});

  text ("Drag the Hexagonal Stone and Release it to Launch it Towards the Blocks", 750,40 );
}

function draw() {
   backgroundImg("dark grey");

  Engine.update(engine);

  ground1.display();
  stand1.display();
  stand2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  
  fill("lightBlue");
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  
  fill("pink");
  block10.display();
  block11.display();
  block12.display();

  fill(rgb(47, 48, 48));
  block13.display();
  
  fill(rgb(135, 205, 236));
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  fill("lightGreen");
  block19.display();
  block20.display();
  block21.display();

  fill("orange");
  block22.display();
  
  imageMode(CENTER);
  image(polygon_img, polygon.position.x, polygon.position.y,40,40);
  
  slingshot.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}
  
function mouseReleased(){
  slingshot.fly();
}