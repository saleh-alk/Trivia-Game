import { async } from 'regenerator-runtime';
// import Game from './scripts/game.js'
import Character from './scripts/character.js'
import Question from './scripts/question.js'

document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.querySelector("#game-box")
    let ctx = canvas.getContext("2d")
    const questions = new Question()
    questions.trivia()

    const player = new Character({
        x: 5,
        y:200
    },{
        x:0,
        y:0
    }, "src/assets/astronaut6.png", ctx, canvas)

    const red = new Character({
        x: 200,
        y:55

    },{
        x: 0,
        y: 2
    }, "src/assets/red.png", ctx, canvas)

    const green = new Character({
        x: 400,
        y: 55

    }, {
        x: 0,
        y: 2
    }, "src/assets/green.png", ctx, canvas)

    const blue = new Character({
        x: 600,
        y: 55

    }, {
        x: 0,
        y: 2
    }, "src/assets/blue.png", ctx, canvas)

    const yellow = new Character({
        x: 800,
        y: 55

    }, {
        x: 0,
        y: 2
    }, "src/assets/yellow.png", ctx, canvas)
    let score = 0

    /// start the game button and gameover
    let startButton = document.getElementById("start")
    let gameOver = document.getElementById("gameover")
    let nextRound = document.getElementById("nextround")

    //animate characters, collision, answers movement
  
    function animate() {
        const frames = requestAnimationFrame(animate)
        ctx.fillStyle = "#2d545e"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        player.update()
        red.update()
        green.update()
        blue.update()
        yellow.update()
        
        //collision
        function collision(colorPosition, colorCharacter, color) {
            let scores = document.getElementById("score")
            let ans = document.getElementById("answer")
            let questionBox = document.getElementById("question-box")
            let ansText = ans.innerText
            // console.log(ansText)
            
            if (player.position.x + player.character.width -20>= colorPosition.x
                && player.position.x +20 <= colorPosition.x + colorCharacter.width
                && player.position.y + player.character.height >= colorPosition.y +25
                && player.position.y <= colorPosition.y + colorCharacter.height - 20 && color !==ansText ) {
                let gameBox = document.getElementById("game-box")
                let finalScore = document.getElementById("final-score")
                let scoreBoard = document.getElementById("scoreboard")

                finalScore.innerHTML = score
                //score = 0
                scores.innerHTML = score
  
                gameOver.style.display = "block"
                gameBox.style.display = "none"
                questionBox.style.display = "none"
                scoreBoard.style.display = "none"

                player.position.x = -30
                player.position.y = 200
                
            } else if (player.position.x + player.character.width - 20 >= colorPosition.x 
                && player.position.x +20 <= colorPosition.x + colorCharacter.width 
                && player.position.y + player.character.height >= colorPosition.y + 25
                && player.position.y <= colorPosition.y + colorCharacter.height - 20 && color === ansText){
                let nextRound = document.getElementById("nextround")
                let gameBox = document.getElementById("game-box")
                let questionBox = document.getElementById("question-box")

                player.position.x = 5
                player.position.y = 200

                score += 1
                scores.innerHTML = score
                cancelAnimationFrame(frames)

                red.position.x = 200
                red.position.y = 55
                red.velocity.x = 0
                red.velocity.y = 2

                green.position.x = 400
                green.position.y = 55
                green.velocity.x = 0
                green.velocity.y = 2

                blue.position.x = 600
                blue.position.y = 55
                blue.velocity.x = 0
                blue.velocity.y = 2

                yellow.position.x = 800
                yellow.position.y = 55
                yellow.velocity.x = 0
                yellow.velocity.y = 2


                gameBox.style.display = "none"
                nextRound.style.display = "block"
                questionBox.style.display = "none"

            }
        }
        collision(red.position, red.character, "red")
        collision(yellow.position, yellow.character, "yellow")
        collision(blue.position, blue.character, "blue")
        collision(green.position, green.character, "green")
   
        //colors up and down movement
        if(red.position.y > 500){
            red.velocity.y = -1 * Math.floor(Math.random() * 5) + 1
            red.velocity.x = -1 * Math.floor(Math.random() * 5) + 1
        }else if(red.position.y < 20){
            red.velocity.y = Math.floor(Math.random() * 5) + 1
            red.velocity.x = Math.floor(Math.random() * 5) + 1
        } else if (red.position.x > 1000) {
            red.velocity.y = -1 * Math.floor(Math.random() * 5) + 1
            red.velocity.x = -1 * Math.floor(Math.random() * 5) + 1
        } else if (red.position.x < -5) {
            red.velocity.y = Math.floor(Math.random() * 5) + 1
            red.velocity.x = Math.floor(Math.random() * 5) + 1
        }


        if (green.position.y > 500) {
            green.velocity.y = -1 * Math.floor(Math.random() * 5) + 1
            green.velocity.x = -1 * Math.floor(Math.random() * 5) + 1
        } else if (green.position.y < 20) {
            green.velocity.y = Math.floor(Math.random() * 5) + 1
            green.velocity.x = Math.floor(Math.random() * 5) + 1
        } else if (green.position.x > 1000) {
            green.velocity.y = -1 * Math.floor(Math.random() * 5) + 1
            green.velocity.x = -1 * Math.floor(Math.random() * 5) + 1
        } else if (green.position.x < -5) {
            green.velocity.y = Math.floor(Math.random() * 5) + 1
            green.velocity.x = Math.floor(Math.random() * 5) + 1
        }


        if (yellow.position.y > 500) {
            yellow.velocity.y = -1 * Math.floor(Math.random() * 5) + 1
            yellow.velocity.x = -1 * Math.floor(Math.random() * 5) + 1
        } else if (yellow.position.y < 20) {
            yellow.velocity.y = Math.floor(Math.random() * 5) + 1
            yellow.velocity.x = Math.floor(Math.random() * 5) + 1
        } else if (yellow.position.x > 1000) {
            yellow.velocity.y = -1 * Math.floor(Math.random() * 5) + 1
            yellow.velocity.x = -1 * Math.floor(Math.random() * 5) + 1
        } else if (yellow.position.x < -5) {
            yellow.velocity.y = Math.floor(Math.random() * 5) + 1
            yellow.velocity.x = Math.floor(Math.random() * 5) + 1
        }

        if (blue.position.y > 500) {
            blue.velocity.y = -1 * Math.floor(Math.random() * 5) + 1
            blue.velocity.x = -1 * Math.floor(Math.random() * 5) + 1
        } else if (blue.position.y < 20) {
            blue.velocity.y = Math.floor(Math.random() * 5) + 1
            blue.velocity.x = Math.floor(Math.random() * 5) + 1
        } else if (blue.position.x > 1000) {
            blue.velocity.y = -1 * Math.floor(Math.random() * 5) + 1
            blue.velocity.x = -1 * Math.floor(Math.random() * 5) + 1
        } else if (blue.position.x < -5) {
            blue.velocity.y = Math.floor(Math.random() * 5) + 1
            blue.velocity.x = Math.floor(Math.random() * 5) + 1
        }

    }

    let sound = document.getElementById("sound")
    let mute = document.getElementById("mute")

    
    //user movement
    window.addEventListener("keydown", (e)=> {
        e.preventDefault()
        switch(e.key){
            case "ArrowRight":
                if (player.position.x < 1030){
                    player.velocity.x = 5
                }else{
                    player.velocity.x = 0
                }
                
            break

            case "ArrowLeft":
                if (player.position.x > 0){
                    player.velocity.x = -5
                }else{
                    player.velocity.x = 0
                }
                
            break

            case "ArrowUp":
                if(player.position.y  > 10){
                    player.velocity.y = -5
                } else{
                    player.velocity.y = 0
                }
                break

            case "ArrowDown":
                if(player.position.y < 500){
                    player.velocity.y = 5
                } else{
                    player.velocity.y = 0
                }
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

    startButton.addEventListener("click", (e) => {
        let startDiv = document.getElementById("start")
        let gameBox = document.getElementById("game-box")
        let questionBox = document.getElementById("question-box")
        let scoreBoard = document.getElementById("scoreboard")
        let instructions = document.getElementById("instructions")
        
        animate()
        
        startDiv.style.display = "none"
        gameBox.style.display = "block"
        questionBox.style.display = "block"
        scoreBoard.style.display = "block"
        instructions.style.display = "none"
    })

    nextRound.addEventListener("click", (e)=> {
        let gameBox = document.getElementById("game-box")
        let questionBox = document.getElementById("question-box")

        animate()
        questionBox.style.display = "block"
        nextRound.style.display = "none"
        gameBox.style.display = "block"
    })

    gameOver.addEventListener("click", (e) => {
        window.location.reload()
    })

    let audio = new Audio("./src/assets/drone.mp3")

    sound.addEventListener("click", () => {
        sound.style.display = "none"
        mute.style.display = "block"
        audio.play()
    })

    mute.addEventListener("click", () => {
        sound.style.display = "block"
        mute.style.display = "none"
        audio.pause()
    })
})


