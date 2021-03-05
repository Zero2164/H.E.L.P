const desksArr = [];
const customerArr = [];

class Desk { 
    constructor() {
        this.obj = 115;
        this.x = canvas.width;
        this.width = 50;
        this.color = 'black';
    }

    draw() {
        c.fillStyle = this.color;
        c.fillRect(this.x, canvas.height - this.obj, this.width, this.obj);
    }
    update() {
        this.x -= gameSpeed;
        this.draw();
    }
};

class Customer { 
    constructor() {
        this.obj = 125;
        this.x = canvas.width;
        this.width = 20;
        this.color = 'blue';
    }

    draw() {
        c.fillStyle = this.color;
        c.fillRect(this.x, canvas.height - this.obj, this.width, this.obj);
    }
    update() {
        this.x -= gameSpeed;
        this.draw();
    }
};


function handleObstacles() {
    if(frame%150 === 0) {
        desksArr.unshift(new Desk);
    };
    for (let i = 0; i < desksArr.length; i++) {
        desksArr[i].update();
    };
    if(desksArr.length > 20) {
        desksArr.pop(desksArr[0]);
    };
    if(frame%120 === 0) {
        customerArr.unshift(new Customer);
    };
    for (let i = 0; i < customerArr.length; i++) {
        customerArr[i].update();
    };
    if(customerArr.length > 20) {
        customerArr.pop(customerArr[0]);
    };


};
