var database;
var gameState = 0;
var playerCount;
var player, form, game;
var allPlayers;
var car1, car2, car3, car4, cars;
var car1img, car2img, car3img, car4img, trackImg; 
var crossedFinishPoint;
var finishedPlayers = 0;
var bronzeImage, silverImage, goldImage;

function preload(){
    car1img = loadImage("images/car1.png");
    car2img = loadImage("images/car2.png");
    car3img = loadImage("images/car3.png");
    car4img = loadImage("images/car4.png");
    trackImg = loadImage("images/track.jpg");
    bronzeImage = loadImage("images/bronze.png");
    silverImage = loadImage("images/silver.png");
    goldImage = loadImage("images/gold.png");
}

function setup(){
    createCanvas(displayWidth - 20, displayHeight - 30);

    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount === 4 && finishedPlayers === 0){
        game.update(1);
    }
    if(gameState === 1){
        clear();
        game.play();
    }
    if(finishedPlayers === 4){
        gameState = 2;
    }
    if(gameState === 2){
        console.log("Game Ended");
        game.displayRank();
    }
}

