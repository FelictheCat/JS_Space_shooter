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




restartBtnNode.addEventListener("click", restartGame);
document.addEventListener("keydown", (event) =>{
    if (event.key === "R"){
          restartGame()
     }
})

  function restartGame() {
        let shipObj = null
        let obstacleobj = []
        let asteriodObj = [] //turn to array
        let planetObj = []
        let lazerObj = []
        let frameCounter = 0

        startGame()
  };













  // for bullet collsion get asteriod to turn in do display none then work out how to display explosion? 
// or code the explosion into true/false in the asteriod Class builder

function lazerVsSteriod(){
        asteriodObj.forEach((asteriod, index) => {
        if (checkCollison(lazerObj, asteriod)){
            asteriod.destroy()
        }
    })
}

const explosionImage = [
        "./Images/Explosions/expl_10_0011.png",
        "./Images/Explosions/expl_10_0018.png",
        "./Images/Explosions/expl_10_0025.png",
        "./Images/Explosions/expl_11_0016.png",
        "./Images/Explosions/expl_11_0022.png",       
      ]

class AsteriodMediumRight {

  constructor(positionX, positionY) {
    this.isDestroyed = false;

    this.node = document.createElement("img")
    this.node.src = asteriodsImages[Math.floor(Math.random() * asteriodsImages.length)]
    gameBoxNode.append(this.node)

    this.x = positionX
    this.y = positionY
    this.w = 120
    this.h = 120

    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`
    this.node.style.width = `${this.w}px`
    this.node.style.height = `${this.h}px`

    this.speed = 1.1

    this.node.style.zIndex = 3

  } 
  
  destroy(){
    if (this.isDestroyed) return;
    this.isDestroyed = true;

    this.node.src = explosionImage[Math.floor(Math.random() * explosionImage.length)]
    gameBoxNode.append(this.node)

    setTimeout(() => {
        removeObject(obj);
            }, 300);

}


automaticMovement() {
    this.x -= this.speed
    this.node.style.left = `${this.x}px`
  }

}

