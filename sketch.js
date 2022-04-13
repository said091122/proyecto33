const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4;
var pig1, pig2;
var tronco1, tronco2, tronco3, tronco4;
var pajaro

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20)
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70)
    box4= new Box(920,240,70,70)
    pig1= new Pig(810,350)
    pig2= new Pig(810,220)
    tronco1= new Tronco(810,260,300,PI/2)
    tronco2= new Tronco(810,180,300,PI/2)
    tronco3= new Tronco(760,120,150,PI/7)
    tronco4= new Tronco(870,120,150,-PI/7)
    pajaro = new Pajaro(100,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    pig2.display();
    tronco1.display();
    tronco2.display();
    tronco3.display();
    tronco4.display();
    pajaro.display();
}