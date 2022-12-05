


class Question {
    

    constructor(ctx){
        
        this.ctx = ctx
        this.y = 55

        this.red_y = 55
        this.red_x = 200
        this.red_down = true

        this.green_y = 55
        this.green_x = 400
        this.green_down = true

        this.blue_y = 55
        this.blue_x = 600
        this.blue_down = true

        this.yellow_y = 55
        this.yellow_x = 800
        this.yellow_down = true

        this.green = new Image()
        this.green.src = "src/assets/green.png"

        this.red = new Image()
        this.red.src = "src/assets/red.png"

        this.yellow = new Image()
        this.yellow.src = "src/assets/yellow.png"

        this.blue = new Image()
        this.blue.src = "src/assets/blue.png"
        

        
    }


   

   

       
    


}

export default Question