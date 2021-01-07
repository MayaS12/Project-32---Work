const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var slate1, slate2;
var polygon, polygonImg;
var rope;
var backgroundImg, bg;

var score = 0;

//slate1 - level1
var block1, block2, block3, block4, block5, block6, block7;
//slate1 - level2
var block8, block9, block10, block11, block12;
//slate1 - level3
var block13, block14, block15;
//slate1 - level4
var block16;

//slate2 - level1
var block17, block18, block19, block20, block21;
//slate2 - level2
var block22, block23, block24;
//slate2 - level3
var block25;

function preload() {
  polygonImg = loadImage("polygon.png");
  backgroundImage();
}

function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;

  polygon = Bodies.circle(100,200,50/2,{density: 1.2});
  World.add(world,polygon);

  ground = new Slate(500,height,1000,20);

  slate1 = new Slate(450,300,270,20);
  slate2 = new Slate(800,200,190,20);

  rope = new Rope(polygon, {x: 100, y:200})

  //slate1 - level1
  block1 = new Block(360,270,30,40);
  block2 = new Block(390,270,30,40);
  block3 = new Block(420,270,30,40);
  block4 = new Block(450,270,30,40);
  block5 = new Block(480,270,30,40);
  block6 = new Block(510,270,30,40);
  block7 = new Block(540,270,30,40);

  //slate1 - level2
  block8 = new Block(390,230,30,40);
  block9 = new Block(420,230,30,40);
  block10 = new Block(450,230,30,40);
  block11 = new Block(480,230,30,40);
  block12 = new Block(510,230,30,40);

  //slate1 - level3
  block13 = new Block(420,190,30,40);
  block14 = new Block(450,190,30,40);
  block15 = new Block(480,190,30,40);

  //slate1 - level4
  block16 = new Block(450,150,30,40);

  //slate2 - level1
  block17 = new Block(735,170,30,40);
  block18 = new Block(765,170,30,40);
  block19 = new Block(795,170,30,40);
  block20 = new Block(825,170,30,40);
  block21 = new Block(855,170,30,40);

  //slate2 - level2
  block22 = new Block(765,130,30,40);
  block23 = new Block(795,130,30,40);
  block24 = new Block(825,130,30,40);

  //slate2 - level3
  block25 = new Block(795,90,30,40);

}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
}
  Engine.update(engine); 

  fill("white");
  textSize(20);
text("Score: "+score, 900, 40);

  imageMode(CENTER);

  ground.display();

  slate1.display();
  slate2.display();

  rope.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();

  block1.Score();
  block2.Score();
  block3.Score();
  block4.Score();
  block5.Score();
  block6.Score();
  block7.Score();
  block8.Score();
  block9.Score();
  block10.Score();
  block11.Score();
  block12.Score();
  block13.Score();
  block14.Score();
  block15.Score();
  block16.Score();
  block17.Score();
  block18.Score();
  block19.Score();
  block20.Score();
  block21.Score();
  block22.Score();
  block23.Score();
  block24.Score();
  block25.Score();

  image(polygonImg, polygon.position.x, polygon.position.y, 50,50);
}

  function keyPressed(){
    if(keyCode === 32){
        rope.attach(polygon);
    }
}  

function mouseDragged(){
  Matter.Body.setPosition(polygon,{x: mouseX, y: mouseY});
}

function mouseReleased(){
  rope.fly()
}

async function backgroundImage(){
  var res = await fetch ("http://worldclockapi.com/api/json/utc/now");
  var reJSON = await res.json();
  var dateTime = reJSON.currentDateTime;
  var hour = dateTime.slice(11,13);
  console.log(hour);

  if (hour >= 11 && hour <= 19){
      bg = "yellow.png"
  }
  else{
      bg = "blue.jpg"
  }
  backgroundImg = loadImage(bg); 
}