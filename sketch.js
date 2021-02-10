var canvas;
var music;
var box1, box2, box3, box4, ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(75,580,185,20);
    box1.shapeColor = "blue";

    box2 = createSprite(295,580,185,20);
    box2.shapeColor = "yellow";

    box3 = createSprite(515,580,185,20);
    box3.shapeColor = "red";

    box4 = createSprite(725,580,185,20);
    box4.shapeColor = "green";

    ball = createSprite(400,300,40,40);
    ball.shapeColor = "white";
    ball.velocityX = 6;
    ball.velocityY = 7;


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    if(box1.isTouching(ball) && ball.bounceOff(box1)){
        ball.shapeColor = "blue"; 
        music.stop();
    }
    if(box2.isTouching(ball) && ball.bounceOff(box2)){      
        ball.shapeColor = "yellow";
        ball.velocityX = 0;
        ball.velocityY = 0;
       
    }
    if(box3.isTouching(ball) && ball.bounceOff(box3)){
        ball.shapeColor = "red";
        ball.bounceOff(box3);
        music.play();
    }
    if(box4.isTouching(ball)&& ball.bounceOff(box4)){
        ball.shapeColor = "green";
    
    }
    drawSprites();
}
