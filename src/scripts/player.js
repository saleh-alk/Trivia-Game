


class Player {
    constructor(ctx){
        this.x = -30;
        this.y = 55;
        this.astronaut = new Image()
        this.astronaut.src = "src/assets/astronaut.png"
        this.ctx = ctx;
        
    
    }

    animate(){
       
        this.astronaut.onload = ()=> {
            this.ctx.clearRect(0, 0, 800, 340)
            this.ctx.drawImage(this.astronaut, this.x, this.y, 150, 150);
            
        }
        

       
        document.addEventListener("keydown", (e) => {

            if (e.key === 'ArrowRight' || e.key === 'Right') {
                this.x += 30
                console.log(this.x)
                this.ctx.clearRect(0, 0, 800, 340)
                this.ctx.drawImage(this.astronaut, this.x, this.y, 150, 150);
            }
            if (e.key === 'ArrowLeft' || e.key === 'Left') {
                this.x -= 30
                this.ctx.clearRect(0, 0, 800, 340)
                this.ctx.drawImage(this.astronaut, this.x, this.y, 150, 150);
            }
        });
    
        
    }

    moveRight(){
        this.x += 10
        
    }

    moveLeft(){
        this.x -= 10
    }

    rightAnswer(){

    }

    wrongAnswer(){

    }

    
     


}


export default Player