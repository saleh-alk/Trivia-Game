
import Player from './player.js'
class Game {
    constructor(ctx){
        
        this.ctx = ctx
        this.player = new Player(ctx)
        this.player.animate()

      
        
    }

    startGame(){
        
    }

    startRound(){

    }

    animate(){
        //background Image
        // const background = new Image()
        // background.src = "src/assets/background.png"

        //Player
        // const spriteSheet = new Image()
        // spriteSheet.src = "src/assets/astronaut.png"
        // spriteSheet.classList.add("astronaut")


        
        // window.onload = ()=> {
           
        //     this.ctx.drawImage(background, 0, 0);
        
        // }
        this.player.animate()
       

    }

    restart(){

    }

}
export default Game;