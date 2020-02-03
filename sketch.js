const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stick1,stick1,stick3;
var roof1,roof2;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    stick1 = new Stick(50,280,30,200);
    stick2 = new Stick(350,280,30,200); 

    stick3 = new Stick(200,305,150,150); 

    stick4 = new Stick(95,255,40,250); 
    stick5 = new Stick(305,255,40,250); 

    ground = new Ground(200,390,400,20);
}

function draw(){
    background('#9ACDE0');
    Engine.update(engine);
    stick1.display();
    stick2.display();
    stick3.display();
    stick4.display();
    stick5.display();
    ground.display();


    fill("#E08C96");
    triangle(30,180,50,50,70,180);
    fill("#E08C96");
    triangle(330,180,350,50,370,180);
    fill("#E08C96");
    triangle(120,230,200,150,280,230);
    fill("#E08C96");
    triangle(70,130,95,70,120,130);
    fill("#E08C96");
    triangle(280,130,305,70,330,130);

}