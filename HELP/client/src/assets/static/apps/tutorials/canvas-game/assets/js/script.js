// create a function to contain 'ytCanvasGame' code.
function ytCanvasGame() {
    const 
        // select related HTML document elements.
        canvas = document.querySelector('canvas'), 
        scoreEl = document.querySelector('#scoreEl'), 
        totalScoreEl = document.querySelector('#totalScoreEl'),
        startGameBtn = document.querySelector('.startGameBtn'),
        restartGameBtn = document.querySelector('.restartGameBtn'),
        scoreOverlay = document.querySelector('.scoreOverlay'),
        guiScreen = document.querySelector('.guiScreen'),
        c = canvas.getContext('2d'); //2d Player variable.

    // Change canvas width and height to match browser height and width.
    // this uses the document.window object > which has a property of "innerWidth" and "innerHeight".
    canvas.width = innerWidth;
    canvas.height = innerHeight;


    // create player class to define player
    class Player {
        // create a constructor that gets called each time you instantiate a new version of the Player class.
        constructor(x, y, radius, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
        };
        //create a function to draw the player as a circle on the canvas.
        draw() {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.fillStyle = this.color;
            c.fill();
        };
    };
    // create projectile class to define projectile.
    class Projectile {
        //create a constructor that gets called each time you instantiate a new version of the Projectile class.
        constructor(x, y, radius, color, velocity) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.velocity = velocity;
        };
        //create a function to draw the projectile as circles on the canvas.
        draw() {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.fillStyle = this.color;
            c.fill();
        };
        //create a function to update the velocity values of x and y.
        update() {
            this.draw();
            this.x = this.x + this.velocity.x;
            this.y = this.y + this.velocity.y;
        };
    };
    // create Enemy class to define Enemy.
    class Enemy {
        //create a constructor that gets called each time you instantiate a new version of the Enemy class.
        constructor(x, y, radius, color, velocity) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.velocity = velocity;
        };
        //create a function to draw the Enemy on the canvas.
        draw() {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.fillStyle = this.color;
            c.fill();
        };
        //create an update function to update the x and y velocity.
        update() {
            this.draw();
            this.x = this.x + this.velocity.x;
            this.y = this.y + this.velocity.y;
        };
    };
    // create a const for the "friction" value. Value is added to particle velocity, to decrease particle velocity over time.
    const friction = 0.99;
    class Particle {
        //create a constructor that gets called each time you instantiate a new version of the Enemy class.
        constructor(x, y, radius, color, velocity) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.velocity = velocity;
            this.alpha = 1;
        };
        //create a function to draw the Enemy on the canvas.
        draw() {
            c.save();
            c.globalAlpha = this.alpha;
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.fillStyle = this.color;
            c.fill();
            c.restore();
        };
        //create an update function to update the x and y velocity.
        update() {
            this.draw();
            this.velocity.x *= friction;
            this.velocity.y *= friction;
            this.x = this.x + this.velocity.x;
            this.y = this.y + this.velocity.y;
            this.alpha -= 0.01;
        };
    };
    const
        // create const variable that divides the canvas height&width by 2 -> used to center the drawn player and projectiles point of reference. 
        x = canvas.width / 2,
        y = canvas.height / 2;
    let
        player = new Player(x, y, 10, 'whitesmoke'), //Create a new instance of the player within the canvas, based on the Player class / constructor properties/values.
        // reset the arrays and values 
        projectiles = [],
        enemies = [],
        particles = [],
        spawnRate; //used to store the interval of the enemy spawn rate and used throughout global scope.

    // init function to initialise the game, resetting all values back to defaults.
    function init() {
        startGameBtn.style.display = 'none';
        restartGameBtn.style.display = 'block';
        guiScreen.style.display = 'none';
        scoreOverlay.style.opacity = '1';
        clearInterval(spawnRate);
        eventListen = true;
        player = new Player(x, y, 10, 'whitesmoke'); //Create a new instance of the player within the canvas, based on the Player class / constructor properties/values.
        projectiles = [];
        enemies = [];
        particles = [];
        score = 0;
        scoreEl.innerHTML = score;
        totalScoreEl.innerHTML = score;
        animate();
        spawnEnemies();
    }
    // spawnEnemies function to set an interval for enemy spawn rate and instantiating a new instance of the enemy at a random off screen location.
        // Enemies are created based on the Enemy class / constructor properties/values.
    function spawnEnemies() {
        spawnRate = setInterval(() => {
            let
                x,
                y;
            const
                radius = Math.random() * (30 - 10) + 10;

            if (Math.random() < 0.5) {
                x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
                y = Math.random() * canvas.height;
            } else {
                x = Math.random() * canvas.width;
                y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius;
            };
            // create const variables to calculate the velocity and angle the Enemy needs to travel at to reach the Player
            const
                color = `rgb(14, 14, 14)`,
                angle = Math.atan2(
                    canvas.height / 2 - y,
                    canvas.width / 2 - x
                ),
                velocity = {
                    x: Math.cos(angle),
                    y: Math.sin(angle)
                };
            enemies.push(new Enemy(x, y, radius, color, velocity)); //Create a new instance of the Enemy within the canvas, based on the Enemy class / constructor properties/values.
        }, 1000);

    }
    // create let variables to store default values for the score(number), animationId(used to start the canvas animation) and eventListen(boolean value).
    let
        animationId,
        score = 0,
        eventListen;

    // animate function to begin an animation frame,
        //fill canvas with background color
        //draw the new instance of the player
        //call update functions within forEach Loops for the Enemy, Projectiles, and Particles
    function animate() {
        animationId = requestAnimationFrame(animate);
        c.fillStyle = 'rgba(64, 68, 75, 0.1)';
        c.fillRect(0, 0, canvas.width, canvas.height);
        player.draw(); //calling the draw object on the player
        particles.forEach((particle, index) => {
            if (particle.alpha <= 0) {
                particles.splice(index, 1);
            } else {
                particle.update();
            }
        });
        projectiles.forEach((projectile, index) => {
            projectile.update();
            // remove projectiles from edge of screen
            if (
                projectile.x + projectile.radius < 0 ||
                projectile.x - projectile.radius > canvas.width ||
                projectile.y - projectile.radius < 0 ||
                projectile.y - projectile.radius > canvas.height
            ) {
                setTimeout(() => {
                    projectiles.splice(index, 1);
                }, 0);
            };
        });
        enemies.forEach((enemy, enemyIndex) => {
            enemy.update();
            const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y);
            // end game
            if (dist - enemy.radius - player.radius < 1) {
                eventListen = false;
                scoreOverlay.style.opacity = '0';
                particles.push(
                    new Particle(
                        player.x,
                        player.y,
                        Math.random() * 5,
                        'red',
                        {
                            x: (Math.random() - 0.5) * (Math.random() * 10),
                            y: (Math.random() - 0.5) * (Math.random() * 10)
                        }
                    )
                );
                totalScoreEl.innerHTML = score;
                guiScreen.style.display = 'block';
            };
            projectiles.forEach((projectile, projectileIndex) => {
                const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y);
                // when projectiles touch enemy
                if (dist - enemy.radius - projectile.radius < 1) {
                    // create explosions
                    for (let i = 0; i < enemy.radius * 2; i++) {
                        particles.push(
                            new Particle(
                                projectile.x,
                                projectile.y,
                                Math.random() * 4,
                                projectile.color,
                                {
                                    x: (Math.random() - 0.5) * (Math.random() * 4),
                                    y: (Math.random() - 0.5) * (Math.random() * 8)
                                }
                            )
                        );
                    };

                    if (enemy.radius - 10 > 5) {
                        //increase the score
                        score += 100;
                        scoreEl.innerHTML = score;
                        gsap.to(enemy, {
                            radius: enemy.radius - 10
                        });
                        setTimeout(() => {
                            projectiles.splice(projectileIndex, 1);
                        }, 0);
                    } else {
                        //remove from scene altogether
                        score += 250;
                        scoreEl.innerHTML = score;
                        setTimeout(() => {
                            enemies.splice(enemyIndex, 1);
                            projectiles.splice(projectileIndex, 1);
                        }, 0);
                    }
                };
            });
        });
    }

    // create a window eventListener to listen for a click on any point within the browser window
        // -> this click will calculate the angle and velocity of the projectiles from the Player instance, 
        // -> then create a new instance of the projectile that will follow the trajectory line from the Player instance to the tracked click event.
    addEventListener('click', (event) => {
        // set velocity for each projectile
        const
            angle = Math.atan2(
                event.clientY - y,
                event.clientX - x
            ),
            velocity = {
                x: Math.cos(angle) * 5,
                y: Math.sin(angle) * 5
            };
        if (eventListen) {
            projectiles.push(new Projectile(x, y, 16, 'rgba(170, 217, 255, 0.8)', velocity));
        }
    });

    // startGameBtn eventListener to listen for a click on the startGameBtn, and call the init() function -> which starts the game
    startGameBtn.addEventListener('click', () => {
        cancelAnimationFrame(animationId);
        init();
    });
    // restartGameBtn eventListener which does the same as the above.
    restartGameBtn.addEventListener('click', () => {
        cancelAnimationFrame(animationId);
        init();
    });
};
// call the ytCanvasGame() to initialise the code stored within the browser window.
ytCanvasGame();


