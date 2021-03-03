const obstaclesArr = [];

class Obstacle { 
    constructor() {
        this.bottom = 78;
        this.x = canvas.width;
        this.width = canvas.width;
        this.color = 'black';
    }

    draw() {
        c.fillStyle = this.color;
        c.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
    }
    update() {
        this.x -= gameSpeed;
        this.draw();
    }
};


function handleObstacles() {
    if(frame%50 === 0) {
        obstaclesArr.unshift(new Obstacle);
    };
    for (let i = 0; i < obstaclesArr.length; i++) {
        obstaclesArr[i].update();
    };
    if(obstaclesArr.length > 20) {
        obstaclesArr.pop(obstaclesArr[0]);
    };
};
