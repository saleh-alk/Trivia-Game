import { async } from 'regenerator-runtime';
//import Game from './scripts/game.js'
import Character from './scripts/character.js'
import Question from './scripts/question.js'

document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.querySelector("#game-box")
    let ctx = canvas.getContext("2d")

    

  

    const questions = new Question()
    questions.trivia()


    
    
  
    const player = new Character({
        x: -30,
        y:200
    },{
        x:0,
        y:0
    }, "src/assets/astronaut2.png", ctx, canvas)

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
        y: 1
    }, "src/assets/green.png", ctx, canvas)

    const blue = new Character({
        x: 600,
        y: 55

    }, {
        x: 0,
        y: 3
    }, "src/assets/blue.png", ctx, canvas)

    const yellow = new Character({
        x: 800,
        y: 55

    }, {
        x: 0,
        y: 4
    }, "src/assets/yellow.png", ctx, canvas)

    

    
    let score = 0

    /// start the game button and gameover
    let startButton = document.getElementById("start")
    let gameOver = document.getElementById("gameover")


    //animate characters, collision, answers movement
  
    
    function animate() {
        
        //window.requestAnimationFrame(animate)
        const frames = requestAnimationFrame(animate)
        ctx.fillStyle = "black"
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
            let ansText = ans.innerText
            
            if (player.position.x + player.character.width >= colorPosition.x
                && player.position.x <= colorPosition.x + colorCharacter.width
                && player.position.y + player.character.height >= colorPosition.y +25
                && player.position.y <= colorPosition.y + colorCharacter.height - 20 && color !==ansText ) {
                score += 1
                scores.innerHTML = score
                console.log(score)
                //gameOver = true
                gameOver.style.display = "block"
                red.position.x = 200
                red.position.y = 55
                

                green.position.x = 400
                green.position.y = 55
                

                blue.position.x = 600
                blue.position.y = 55
                

                yellow.position.x = 800
                yellow.position.y = 55

                player.position.x = -30
                player.position.y = 200
                
                cancelAnimationFrame(frames)
            }
        }
        collision(red.position, red.character, "red")
        collision(yellow.position, yellow.character, "yellow")
        collision(blue.position, blue.character, "blue")
        collision(green.position, green.character, "green")
        // if (player.position.x + player.character.width >= red.position.x 
        //     && player.position.x <= red.position.x + red.character.width
        //     && player.position.y + player.character.height >= red.position.y
        //     && player.position.y <= red.position.y + red.character.height) {
        //     score += 1
        //     console.log(score)
        //     //gameOver = true
        //     gameOver.style.display ="block"
        //     red.position.x = 200
        //     red.position.y = 55
        //     red.velocity.y = 0

        //     green.position.x = 400
        //     green.position.y = 55
        //     green.velocity.y = 0

        //     blue.position.x = 600
        //     blue.position.y = 55
        //     blue.velocity.y = 0

        //     yellow.position.x = 800
        //     yellow.position.y = 55
        //     yellow.velocity.y = 0
        // }
  

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




    startButton.addEventListener("click", (e) => {
        let startDiv = document.getElementById("start")
        let gameBox = document.getElementById("game-box")
        let questionBox = document.getElementById("question-box")
        let scoreBoard = document.getElementById("scoreboard")

        // let ans = document.getElementById("answer")
        // let ansText = ans.innerText
        // console.log(ansText)
        
        animate()
        


        


        startDiv.style.display = "none"
        gameBox.style.display = "block"
        questionBox.style.display = "block"
        scoreBoard.style.display = "block"
    })


    gameOver.addEventListener("click", (e) => {
        let startDiv = document.getElementById("start")
        let gameBox = document.getElementById("game-box")
        let questionBox = document.getElementById("question-box")
        let scoreBoard = document.getElementById("scoreboard")
        
        
        ctx.clearRect(0,0, canvas.width, canvas.height)

        //console.log(questions.trivia())

        

        startDiv.style.display = "block"
        gameBox.style.display = "none"
        questionBox.style.display = "none"
        scoreBoard.style.display = "none"

    })


    






})


