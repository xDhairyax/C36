var database;
var form,player,game;
var playerCount;
var gameState=0;
var allPlayers;

function setup(){
  database = firebase.database();


  createCanvas(displayWidth-20,displayHeight-20);
game=new Game();
game.getState();
game.start();

}

function draw(){
  background("white");
  if(playerCount===4){
    game.update(1);
    
  }
  if(gameState===1){
    game.play();
  }
  
   
    drawSprites();
  
}
