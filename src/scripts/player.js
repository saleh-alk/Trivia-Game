


class Player {
    constructor(ctx, x, y){
        this.x = x; //-30
        this.y = y; //200
        this.astronaut = new Image()
        this.astronaut.src = "src/assets/astronaut.png"
        this.ctx = ctx;
        this.answer = ""
        
    
    }

    draw(ctx, x, y){
        ctx.drawImage(this.astronaut, x, y, 150,  150)
    }

    animate(){
       
        this.astronaut.onload = ()=> {
            this.ctx.clearRect(this.x, this.y, 120, 120)
            this.ctx.drawImage(this.astronaut, this.x, this.y, 150, 150);
            
        }
        

    
        
    }

   move(){
       document.addEventListener("keydown", (e) => {

           if (e.key === 'ArrowRight' || e.key === 'Right') {
               if (this.x !== 990) {
                   this.x += 30
                   //console.log(this.x)
                   this.ctx.clearRect(this.x, this.y, 150, 150)
                   this.ctx.drawImage(this.astronaut, this.x, this.y, 150, 150);
               }

           }
           if (e.key === 'ArrowLeft' || e.key === 'Left') {
               if (this.x !== -30) {
                   this.x -= 30
                   console.log(this.x)
                   this.ctx.clearRect(this.x, this.y, 150, 150)
                   this.ctx.drawImage(this.astronaut, this.x, this.y, 150, 150);
               }


           }
       });
   }

    trivia() {
        const url = "https://opentdb.com/api.php?amount=50"
        async function fetchNew() {
            try {
                const res = await fetch(url);
            
                if (res.ok) {
                    let data = await res.json();
                    return data;
                } else {
                    let data = await res.json();
                    throw data.meta.msg;
                }
            } catch (error) {
                console.warn(error)
            }

        }
        function shuffle(array) {
            let currentIndex = array.length, randomIndex;
            while (currentIndex != 0) {

                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
            }

            return array;
        }

        document.getElementById("question-box").addEventListener('click', async e => {
            e.preventDefault();
            const q = document.getElementById("question")

            const red = document.getElementById("red")
            const blue = document.getElementById("blue")
            const yellow = document.getElementById("yellow")
            const green = document.getElementById("green")

            let colors = [red, blue, yellow, green]


            let question = await fetchNew();
            q.innerHTML = question.results[0].question
            colors = shuffle(colors)
            for (let index = 0; index < colors.length - 1; index++) {
                colors[index].innerHTML = question.results[0].incorrect_answers[index]
            }
            colors[colors.length - 1].innerHTML = question.results[0].correct_answer
            this.answer = colors[colors.length - 1]
            return this.answer.id


        })
    }

    
     


}


export default Player