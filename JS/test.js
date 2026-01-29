// collisons 


function ballWallCollision() {
  // checks is the ball is hitting the wall
  if (ball.x + ball.w >= 400) {
    // console.log(`ball hits X wall`);
    ball.ismovingright = false;
  }
    if (ball.x <= 0) {
    ball.ismovingright = true;
  }

  if (ball.y + ball.h >= 600){
    // ball.ismovingdown = false;
    gameOver()
  }
    if (ball.y <= 0){
    ball.ismovingdown = true;
  }
}

  birdObstacleCollisionCheck = () => {
    // created here since we have easy access to the bird and the obstacles
    this.obstacles.forEach((eachObstacle) => {
      if (
        this.bird.x < eachObstacle.x + eachObstacle.w &&
        this.bird.x + this.bird.w > eachObstacle.x &&
        this.bird.y < eachObstacle.y + eachObstacle.h &&
        this.bird.h + this.bird.y > eachObstacle.y
      ) {
        // Collision detected!
        this.bird.DOMElement.style.animationPlayState = 'paused';
        this.isGameOn = false;
      }
    })
  }

// can i make a golbal collision check? makes more sense - will check google
// yes i can will look very basic - but will help me also code is the bullet collison easier


function checkCollison(objA, objB){
    if(
        objA.x < objB.x + objB.w &&
        objA.x + objA.w > objB.x &&
        objA.y < objB.y + objB.h &&
        objA.h + objA.y > objB.y
    ) {
    return true;
    }   else {
        return false
    }}

//ship vs asteriod

function shipVsAsteriod(){
    asteriodObj.forEach(asteriod => {
        if (checkCollison(shipObj, asteriod)){
            console.log("hit A")
        }
    })
}
