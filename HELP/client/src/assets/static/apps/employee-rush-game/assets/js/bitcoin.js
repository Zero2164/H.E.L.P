const bitcoinArr = [];

class Bitcoin { 
    constructor() {
        this.obj = 30;
        this.x = canvas.width;
        this.width = 20;
        this.color = 'gold';
    }

    draw() {
        c.fillStyle = this.color;
        c.fillRect(this.x, canvas.height - 220, this.width, this.obj);
    }
    update() {
        this.x -= gameSpeed;
        this.draw();
    }
};


function handleBitcoins() {
    if(frame%250 === 0) {
        bitcoinArr.unshift(new Bitcoin);
    };
    for (let i = 0; i < bitcoinArr.length; i++) {
        bitcoinArr[i].update();
    };
    if(bitcoinArr.length > 20) {
        bitcoinArr.pop(bitcoinArr[0]);
    };
};
