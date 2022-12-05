
import Player from './player.js'

import Question from './question.js'
class Game {
    constructor(ctx){
        
        this.ctx = ctx
        this.player = new Player(ctx, -30, 200)
        // this.player.animate()
        
        //this.player.move()
        this.player.trivia()
        console.log(this.player)
        //this.question = new Question(ctx)
        //this.question.animate()
    
        
      
        
    }





    restart(){

    }

}
export default Game;