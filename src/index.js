import { async } from 'regenerator-runtime';
import Game from './scripts/game.js'


document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.querySelector("#game-box")
    let ctx = canvas.getContext("2d")

    let game = new Game(ctx);
    console.log(game.player.trivia())


    class Character {
        constructor(position, velocity, img ){
            this.position = position
            this.img = img
            this.velocity = velocity
    
            this.score = 0
            this.character = new Image()
            this.character.src = this.img
            //this.height = this.character.height
            //this.width = this.character.width

        }

        draw(){
            ctx.drawImage(this.character, this.position.x, this.position.y, this.character.width, this.character.height); 
        }

        update(){
            this.draw()
            this.position.x += this.velocity.x
            this.position.y += this.velocity.y
            if(this.position.y + this.height + this.velocity.y >= canvas.height){
                this.velocity.y = 0
            } 
            if (this.position.x + this.width + this.velocity.x >= canvas.width) {
                this.velocity.x = 0
            } 
        }


    }


    class GameOver {
        constructor(){

        }

        loseDisplay(){
            ctx.fillText("Oh no! You lost", 100, 170);
        }

    }

    const gameover = new GameOver()
    console.log(gameover.loseDisplay())

    const player = new Character({
        x: -30,
        y:200
    },{
        x:0,
        y:0
    }, "src/assets/astronaut2.png")

    const red = new Character({
        x: 200,
        y:55

    },{
        x: 0,
        y: 2
    }, "src/assets/red.png")

    const green = new Character({
        x: 400,
        y: 55

    }, {
        x: 0,
        y: 1
    }, "src/assets/green.png")

    const blue = new Character({
        x: 600,
        y: 55

    }, {
        x: 0,
        y: 3
    }, "src/assets/blue.png")

    const yellow = new Character({
        x: 800,
        y: 55

    }, {
        x: 0,
        y: 4
    }, "src/assets/yellow.png")

    

    let gameOver = false
    let score = 0

    function animate() {
        
        window.requestAnimationFrame(animate)
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        player.update()
        red.update()
        green.update()
        blue.update()
        yellow.update()
    

        //collision

        if (player.position.x + player.character.width >= red.position.x && player.position.x <= red.position.x + red.character.width) {
            score += 1
            console.log(score)
            gameOver = true
            //red.velocity = 0
        }
  

        //colors up and down movement

        if(red.position.y > 500){
            red.velocity.y = -5
        }else if(red.position.y < 20){
            red.velocity.y = 5
        }

        if (green.position.y > 500) {
            green.velocity.y = -5
        } else if (green.position.y < 20) {
            green.velocity.y = 5
        }


        if (blue.position.y > 500) {
            blue.velocity.y = -5
        } else if (blue.position.y < 20) {
            blue.velocity.y = 5
        }

        if (yellow.position.y > 500) {
            yellow.velocity.y = -5
        } else if (yellow.position.y < 20) {
            yellow.velocity.y = 5
        }


    }

    

    if(!gameOver){
        animate()
        console.log(gameOver)
    }else{

    }

    

    
    //user movement
    window.addEventListener("keydown", (e)=> {
        e.preventDefault()
        switch(e.key){
            case "ArrowRight":
                player.velocity.x = 5
            break

            case "ArrowLeft":
                player.velocity.x = -5
            break

            case "ArrowUp":
                player.velocity.y = -5
                break

            case "ArrowDown":
                player.velocity.y = 5
                break
        }
    })

    window.addEventListener("keyup", (e) => {
        switch (e.key) {
            case "ArrowRight":
                player.velocity.x = 0
            break

            case "ArrowLeft":
                player.velocity.x = 0
            break

            case "ArrowUp":
                player.velocity.y = 0
                break

            case "ArrowDown":
                player.velocity.y = 0
                break
        }
        
    })






    // getting cursor positions
    function getCursorPosition(canvas, event) {
        const rect = canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        console.log("x: " + x + " y: " + y)
    }

    
    canvas.addEventListener('mousedown', function (e) {
        getCursorPosition(canvas, e)
    })

})


