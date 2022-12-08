


class Question {
    

    constructor(){
        this.answer = ""
    }


    trivia(url) {
        //https://opentdb.com/api.php?amount=30&category=23&difficulty=easy&type=multiple
        //https://opentdb.com/api.php?amount=50&category=14&difficulty=easy&type=multiple
        //https://opentdb.com/api.php?amount=30&category=19&difficulty=easy&type=multiple
       // const url = "https://opentdb.com/api.php?amount=50&category=14&difficulty=easy&type=multiple"
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

       


        // take this to index
       document.getElementById("playgame").addEventListener('click', async e => {
            //e.preventDefault();
            const q = document.getElementById("question")

            const red = document.getElementById("red")
            const blue = document.getElementById("blue")
            const yellow = document.getElementById("yellow")
            const green = document.getElementById("green")

            let colors = [red, blue, yellow, green]

            let k = Math.floor(Math.random() * 29) + 1
            let question = await fetchNew();
            q.innerHTML = question.results[k].question
            colors = shuffle(colors)
            for (let index = 0; index < colors.length - 1; index++) {
                colors[index].innerHTML = question.results[k].incorrect_answers[index]
            }
            colors[colors.length - 1].innerHTML = question.results[k].correct_answer
        
            const answer = document.getElementById("answer")
            answer.innerHTML = colors[colors.length - 1].id

        })

        
    }


}

export default Question