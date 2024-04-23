class Bird {
    // Constructor to initialize the object with name and age
    constructor(ctx) {
        this.x = 0;
        this.y = 0;
        this.flap = false;
        this.vy = 0;
        this.gravity = 0.4;
        this.ctx = ctx
    }
  
    // Method to display information about the person
    draw() {
      this.ctx.fillStyle = 'red'
      this.ctx.fillRect(this.x, this.y, 10, 10)
    }

    move() {
      if(this.flap) {
        this.vy = 4;
        this.flap = false;
      } else {
        this.y -= this.vy
        this.vy -= this.gravity
      }
    }
}