const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img, backgroundImg;
var score=0

function preload(){
  bg=loadImage("images/day.jpg")
  polygon_img=loadImage("images/ball.png");
  
}
function setup() {
  createCanvas(1200,1000);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(width/2,height,width,20);
  stand1 = new Stand(390,300,400,10);
  stand2 = new Stand(800,600,400,10);
 
  //level one
  block1 = new Block(300,275,60,80);
  console.log(block1);
  block2 = new Block(330,275,60,80);
  block3 = new Block(360,275,60,80);
  block4 = new Block(390,275,60,80);
  block5 = new Block(420,275,60,80);
  block6 = new Block(450,275,60,80);
  block7 = new Block(480,275,60,80);
  //level two
  block8 = new Block(330,235,60,80);
  block9 = new Block(360,235,60,80);
  block10 = new Block(390,235,60,80);
  block11 = new Block(420,235,60,80);
  block12 = new Block(450,235,60,80);
  //level three
  block13 = new Block(360,195,60,80);
  block14 = new Block(390,195,60,80);
  block15 = new Block(420,195,60,80);
  //top
  block16 = new Block(390,155,60,80);

  //set 2 for second stand
  blocks10 = new Block(700,550,60,80);
  blocks11 = new Block(820,550,60,80);
  blocks12 = new Block(790,550,60,80);
  blocks13 = new Block(730,550,60,80);
  blocks14 = new Block(760,550,60,80);
 // blocks15 = new Block(790,450,40,60);
  //level one
  blocks1 = new Block(715,500,60,80);
  blocks2 = new Block(745,500,60,80);
  blocks3 = new Block(805,500,60,80);
  blocks4 = new Block(775,500,60,80);
 // blocks5 = new Block(,400,40,60);
  //level two
  blocks6 = new Block(790,450,60,80);
  blocks7 = new Block(760,450,60,80);
  blocks8 = new Block(730,450,60,80);
  //top
  blocks9 = new Block(760,400,60,80);

  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:500});

  

}
function draw() {
  //background(56,44,44); 
  
    background(bg);
  //Engine.update(engine);
  text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  //blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
  blocks10.display();
  blocks11.display();
  blocks12.display();
  blocks13.display();
  blocks14.display();
  //blocks15.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  textSize(35)
text("score "+score,width-300,50)



block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  fill("pink");
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  fill("turquoise");
  block13.score();
  block14.score();
  block15.score();
  fill("grey");
  block16.score();
  fill("skyblue");
  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  //blocks5.display();
  fill("turquoise");
  blocks6.score();
  blocks7.score();
  blocks8.score();
  fill("pink")
  blocks9.score();
  blocks10.score();
  blocks11.score();
  blocks12.score();
  blocks13.score();
  blocks14.score();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}

