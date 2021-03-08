const desksArr = [];
const customerArr = [];

class Desk { 
    constructor() {
        this.obj1 = 140;
        this.x = canvas.width;
        this.width = 40;
        this.color = 'grey';
    }

    draw() {
        c.fillStyle = this.color;
        c.fillRect(this.x, canvas.height - this.obj1, this.width, this.obj1);
    }
    update() {
        this.x -= gameSpeed;
        this.draw();
    }
};

class Customer { 
    constructor() {
        this.obj2 = 40;
        this.x = canvas.width;
        this.y = player.vy + 260;
        this.width = 20;
        this.color = 'blue';
    }

    draw() {
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.width, this.obj2);
    }
    update() {
        this.x -= gameSpeed;
        this.draw();
    }
};


function handleObstacles() {
    if(frame%160 === 0) {
        desksArr.unshift(new Desk);
    };
    for (let i = 0; i < desksArr.length; i++) {
        desksArr[i].update();
    };
    if(desksArr.length > 20) {
        desksArr.pop(desksArr[0]);
    };
    if(frame%300 === 0) {
        customerArr.unshift(new Customer);
    };
    for (let i = 0; i < customerArr.length; i++) {
        customerArr[i].update();
    };
    if(customerArr.length > 20) {
        customerArr.pop(customerArr[0]);
    };

};
