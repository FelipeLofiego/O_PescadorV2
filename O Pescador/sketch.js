var canudo, lata, garrafa;
var background;
var score = 0;
var fishCount = 0;
var fishingRodX;
var fishingRodY;
var fishWidth;
var fishHeight;
var fishes = [];

function preload(){
    canudo = loadImage("./assets/Canudo.png");
    lata = loadImage("./assets/Lata.png");
    garrafa = loadImage("./assets/Garrafa.png");
    background = loadImage("./assets/Fundo do Jogo.jpg");
}

function setup(){
    createCanvas(1600, 800);
    canvas.parent('gameCanvas');
    fishingRodX = widht / 2;
    fishingRodY = height - 100;

    canudo.resize(fishWidth, fishHeight);
    lata.resize(fishWidth, fishHeight);
    garrafa.resize(fishWidth, fishHeight);

    background(backgroundImage);
    
    var randomX = random(width);
    var randomY = Random(height - 200);
    var randomFish = getRandomFish();

    var fish = {
        x: randomX,
        y: randomY,
        image: randomFish
    };

    fishes.push(fish);

}

function draw(){
    image(backgroundImage, 0, 0, width, height);

    for (var i = 0; i <fishes.lenght; i++) {
        var fish = fishes[i];
        imageMode(CENTER);
        image(fish.image, fish.x, fish.y);

        var distance = dist(fish.x, fish.y, fishingRodX, fishingRodY);
        if (distance < 50) {
        removeFish(i);
        score += 10;
        fishCount++;
    }
    }

stroke(255, 0, 0);
line(fishingRodX, 0, fishingRodX, fishingRodY);

displayScore();
}

function displayScore()  {
    textSize(24);
    fill(255);
text("score: " + score, 20, 40);
text("Fish Count: " + fishCount,20, 80);
}

function gerRandomFish(){
    var randomFish = random([canudo, lata, garrafa]);
    return randomFish;
}

function removeFish(index)  {
    fishes.splice(index, 1);
}