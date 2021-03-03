
class Player {
    constructor() {
        this.x = 80;
        this.y = 220;
        this.vy = 0;
        this.width = 20;
        this.height = 40;
        this.weight = 1;
    }
    draw() {
        c.fillStyle = 'green';
        c.fillRect(this.x, this.y, this.width, this.height);
    }
    update() {
        let curve = Math.sin(angle) * 1;
        if (this.y > canvas.height - (this.height * 3) + curve) {
            this.y = canvas.height - (this.height * 3) + curve;
            this.vy = 0;
        } else {
            this.vy += this.weight;
            this.vy *= 0.9;
            this.y += this.vy;
        };
        if(this.y < 100) {
            this.vy = 0;
            spacePressed = false;
        };
        if(spacePressed && this.vy <= 0) this.jump();
    }
    jump() {
        this.vy -= 3;
    }
};

const player = new Player(); 
