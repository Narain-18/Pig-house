const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var bird;

function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1100,500,90,90);
    pig1 = new Pig(1230,500);
    box2 = new Box(1360,500,90,90);
    log1 = new Log(1230,400,380,PI/2);

    box3 = new Box(1100,350,90,90);
    pig2 = new Pig(1230,350);
    box4 = new Box(1360,350,90,90);
    log2 = new Log(1230,300,380,PI/2);

    log3 = new Log(1230,200,150,-PI/5)
    box5 = new Box(1230,200,90,90);
    log4 = new Log(1230,200,150,PI/5)

    bird = new Bird(100,100);

    ground = new Ground(750,height,1500,20)

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    fill("cyan")
    box1.display();
    fill("cyan")
    box2.display();
    fill("pink");
    ground.display();
    fill("lightgreen");
    pig1.display();
    fill("brown")
    log1.display();

    fill("cyan")
    box3.display();
    fill("cyan")
    box4.display();
    fill("lightgreen");
    pig2.display();
    fill("brown")
    log2.display();

    fill("brown")
    log3.display();
    fill("brown")
    log4.display();
    fill("cyan")
    box5.display();
    
    fill("red");
    bird.display();

}