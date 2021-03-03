const // select related HTML document elements.
    canvas = document.getElementById('canvas1'),
    c = canvas.getContext('2d'); //enables use of 2d canvas methods.

// Change canvas width and height to match browser height and width.
// this uses the document.window object > which has a property of "innerWidth" and "innerHeight".
canvas.width = 600;
canvas.height = 400;

let
    spacePressed = false, //track when spacebar is pressed
    angle = 0, //used by math.sin method to make player move up and down
    frame = 0, //will keep track of frame count of animation loop
    score = 0, //score will increase everytime an obstacle is avoided
    gameSpeed = 2; //gamespeed to ensure all elements are moving at the same speed
// let temp = canvas.height - 90; -> temporary variable to show jumping


// animate function to start animations
function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height); //clear entire canvas of every animation
    // c.fillRect(10, temp, 50, 50); //represents player -> temporary fill to represent player
    player.update();
    player.draw();
    handleParticles();
    handleObstacles();
    requestAnimationFrame(animate); // calling animate within parent function creates recursion
    angle += 0.12;
    frame++;
};
animate();

addEventListener('keypress', (e) => {
    if (e.code === 'Space') spacePressed = true;
    // player.jump();
});
// addEventListener('keyup', (e) => {
//     if (e.code === 'Space') spacePressed = false;
// });

