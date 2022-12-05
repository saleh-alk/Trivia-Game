
class Character {
    constructor(position, velocity, img, ctx, canvas) {
        this.position = position
        this.img = img
        this.velocity = velocity
        this.ctx = ctx
        this.canvas = canvas

        this.score = 0
        this.character = new Image()
        this.character.src = this.img
        //this.height = this.character.height
        //this.width = this.character.width

    }

    draw() {
        this.ctx.drawImage(this.character, this.position.x, this.position.y, this.character.width, this.character.height);
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if (this.position.y + this.height + this.velocity.y >= this.canvas.height) {
            this.velocity.y = 0
        }
        if (this.position.x + this.width + this.velocity.x >= this.canvas.width) {
            this.velocity.x = 0
        }
    }


}

export default Character;