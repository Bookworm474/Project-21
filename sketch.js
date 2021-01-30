var canvas;
var box, surface1, surface2, surface3, surface4;
var sound1;

function preload(){
    sound1 = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,585,190,25);
    surface1.shapeColor = "blue";
    surface2 = createSprite(300,585,190,25);
    surface2.shapeColor = "gold";
    surface3 = createSprite(500,585,190,25);
    surface3.shapeColor = "mediumvioletred";
    surface4 = createSprite(700,585,190,25);
    surface4.shapeColor = "darkgreen";

    //create box sprite and give velocity
    box = createSprite(random(50,750),25,25,25);
    box.shapeColor = "white";
    box.velocityX = -5;
    box.velocityY = -5;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    
    //allow box to bounce off everything but surface4
    box.bounceOff(edges);

    //when box touches surface1, play the music
    if (surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "blue";
        sound1.play();
    }

    //when box touches surface2, stop the music
    if (surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "gold";
        sound1.stop();
    }
    //when box touches surface3, play the music
    if (surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "mediumvioletred";
        sound1.play();
    }
    //when box touches surface4, stop the box and the music
    if (surface4.isTouching(box)){
        box.velocityX = 0;
        box.velocityY = 0;
        box.shapeColor = "darkgreen";
        sound1.stop();
    }

    drawSprites();
    text(mouseX + "and" + mouseY,10,10)
}
