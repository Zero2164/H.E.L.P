const // select related HTML document elements.
    canvas = document.getElementById('canvas1'),
    c = canvas.getContext('2d'), //enables use of 2d canvas methods.
    healthEl = document.querySelector('#health'),
    scoreEl = document.querySelector('#score'),
    btcEl = document.querySelector('#btc');


// Change canvas width and height to match browser height and width.
// this uses the document.window object > which has a property of "innerWidth" and "innerHeight".
canvas.width = innerWidth;
canvas.height = 400;


let
    spacePressed = false, //track when spacebar is pressed
    angle = 0, //used by math.sin method to make player move up and down
    frame = 0, //will keep track of frame count of animation loop
    score = 0, //score will increase everytime an obstacle is avoided
    gameSpeed = 2, //gamespeed to ensure all elements are moving at the same speed
    livePercent = 100, //used to track lives -> after all three are lost, you lose the game;
    btcWallet = 0; //used to track btc collected
// let temp = canvas.height - 90; -> temporary variable to show jumping



// animate function to start animations
function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height); //clear entire canvas of every animation
    // c.fillRect(10, temp, 50, 50); //represents player -> temporary fill to represent player
    handleObstacles();
    handleBitcoins();
    player.update();
    player.draw();
    if (livePercent === 0) {
        return 'Game Over!';
    };
    handleCollisions();
    handleParticles();
    requestAnimationFrame(animate); // calling animate within parent function creates recursion
    angle += 0.12;
    frame++;
};
animate();

addEventListener('keypress', (e) => {
    if (e.code === 'Space') spacePressed = true;
    if (e.code === '') spacePressed = false;
});

// Handle Collisions
const collide = new Image();
collide.src = '../employee-rush-game/assets/Images/canvas/ouch1.png';
// handleCollisions fucntion
function handleCollisions() {
    for (let i = 0; i < desksArr.length; i++) {
        if (player.x < desksArr[i].x + desksArr[i].width &&
            player.x + player.width > desksArr[i].x &&
            (player.y > canvas.height - desksArr[i].obj1 &&
                player.y + player.height < canvas.height)) {
            //collision detected
            c.drawImage(collide, player.x, player.y, 60, 60);
            livePercent--;
            healthEl.value = livePercent;
        };
        for (let t = 0; t < customerArr.length; t++) {
            if (customerArr[t].x < desksArr[i].x + desksArr[i].width &&
                customerArr[t].x + customerArr[t].width > desksArr[i].x) {
                //remove customer if they collide with any of the desks
                customerArr.pop(customerArr[0]);
            };
        };

    };

    for (let z = 0; z < bitcoinArr.length; z++) {
        if (player.x < bitcoinArr[z].x + bitcoinArr[z].width &&
            player.x + player.width > bitcoinArr[z].x &&
            (player.y < bitcoinArr[z].y &&
                player.y + player.height < canvas.height)) {
            //remove bitcoin if they collide with player
            bitcoinArr.pop(bitcoinArr[z]);
            btcWallet++;
            btcEl.innerHTML = btcWallet;
        };
    };


};


