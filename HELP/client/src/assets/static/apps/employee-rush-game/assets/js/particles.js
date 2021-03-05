const particlesArr = [];

class Particle { 
    constructor() {
        this.x = player.x;
        this.y = player.y;
        this.size = Math.random() * 3;
        this.speedY = (Math.random() * 1) - 0.6;
        this.color = 'rgba(180, 180, 180, 0.363)';
    }

    update() {
        this.x -= gameSpeed;
        this.y += this.speedY;
    }
    draw() {
        c.fillStyle = this.color;
        c.beginPath();
        c.fillRect(this.x, this.y, this.size, player.height - 6, player.width);
        c.fill();
    }
};

function handleParticles() {
    particlesArr.unshift(new Particle);
    for (let i = 0; i < particlesArr.length; i++) {
        particlesArr[i].update();
        particlesArr[i].draw();
    };
    // if more than 200, remove 20
    if(particlesArr.length > 200) {
        for (let i = 0; i < 20; i++) {
            particlesArr.pop(particlesArr[i]);
        };
    };
};