


class Question {
    

    constructor(){
        this.answer = ""
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

        let answer = "hi";


        // take this to index
       document.getElementById("start").addEventListener('click', async e => {
            //e.preventDefault();
            const q = document.getElementById("question")

            const red = document.getElementById("red")
            const blue = document.getElementById("blue")
            const yellow = document.getElementById("yellow")
            const green = document.getElementById("green")

           let answer = document.getElementById("answer")

            let colors = [red, blue, yellow, green]


            let question = await fetchNew();
            q.innerHTML = question.results[0].question
            colors = shuffle(colors)
            for (let index = 0; index < colors.length - 1; index++) {
                colors[index].innerHTML = question.results[0].incorrect_answers[index]
            }
            colors[colors.length - 1].innerHTML = question.results[0].correct_answer
            //colors[colors.length - 1]
            //console.log(answer)
           answer.innerHTML = colors[colors.length - 1].id


        })

        
    }

   

  
    


}

export default Question