class Game{
    constructor(){

    }
    getState(){
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",(data)=>{
            gameState=data.val();
        }); 
    }
    update(state){
        database.ref('/').update({
           gameState:state
        })
    }
    start(){

    }
    play(){
        form.hide();
        textSize(30);
        text("Game Start",displayWidth/2,100);
      Player.getPlayerInfo();
      if(allPlayers!==undefined){
          var index=0;
          var x=170;
          var y;
          for(var plr in allPlayers ){
              index=index+1;
              x=x+200;
              y=displayHeight-allPlayers[plr].distance;
              cars[index-1].x=x;
              cars[index-1].y=y;
          }
          if(keyIsDown(UP_ARROW)&& player.index!==null){
                player.distance=player.distance+50;
                player.update();
          }
      }
    }
}