// Dom elements

const startScreenNode = document.querySelector("#start-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameOverScreen = document.querySelector("#game-over-screen")

const startBtnNode = document.querySelector("#startGameBtn")
const restartBtnNode = document.querySelector("#restartBtn")

const gameBoxNode = document.querySelector("#game-box")

const damageFlashNode = document.querySelector("#damageFlash")

//game variables

let shipObj = null
let obstacleArr = []
let asteriodArr = [] 
let planetArr = []
let lazerArr = []
let healthBar = []

let canFire = true
let lazerCooldown = 200


let frameCounter = 0

let gameInterval = null;


//game functions

function checkCollison(objA, objB){
      if (objA.isDestroyed || objB.isDestroyed) {
    return false;
  }

    const padA = objA.w * 0.2
    const padB = objB.w * 0.15

    if(
        objA.x + padA < objB.x + objB.w - padB &&
        objA.x + objA.w - padA > objB.x + padB &&
        objA.y + padA < objB.y + objB.h - padB &&
        objA.y + objA.h - padA > objB.y + padB 
    ) {
    return true;
    }   else {
        return false
    }
}

function shipVsAsteriod(){
    asteriodArr.forEach(asteriod => {
        if (!shipObj.isDestroyed && !shipObj.isInvulnerable && checkCollison(shipObj, asteriod)){
            shipObj.hits -= 1
            shipObj.isInvulnerable = true

            damagetaken()

            if (healthBar.length > 0){
            let heart = healthBar.pop()
            heart.remove()
            }
            setTimeout(() => {
                shipObj.isInvulnerable = false
                        }, 600)

            if(shipObj.hits <= 0){
                shipObj.shipDestroyed()

                setTimeout(() => {
                    gameOver();
                        }, 5000);
            }
        }
    })
}

function shipVsObstacle(){
obstacleArr.forEach(obstacle => {
        if (!shipObj.isDestroyed && checkCollison(shipObj, obstacle)){
            
            shipObj.shipDestroyed()

                setTimeout(() => {
                    gameOver();
                        }, 3000);
            }
        }
    )
}

function lazerVsSteriod() {
  lazerArr.forEach((lazer, lazerIndex) => {
    asteriodArr.forEach((asteriod, asteriodIndex) => {
      if (!asteriod.isDestroyed && checkCollison(lazer, asteriod)) {
        asteriod.destroy();

        lazer.node.remove();
        lazerArr.splice(lazerIndex, 1);
      }
    });
  });
}

function shootLazer(){
    if (!shipObj)return
    if (!canFire)return

    canFire = false

    const positionX = shipObj.x + shipObj.w
    const positionY = shipObj.y + shipObj.h/4 

    const lazer = new Lazer(positionX, positionY)
    lazerArr.push(lazer)
    
    setTimeout(() => {
        canFire = true
    }, lazerCooldown);



}

function damagetaken(){
    damageFlashNode.style.opacity = "0.5"

    setTimeout(() => {
        damageFlashNode.style.opacity = "0"
    }, 100)

}

function startGame() {
    startScreenNode.style.display = "none"
    gameScreenNode.style.display = "flex"
    gameOverScreen.style.display = "none"

    shipObj = new Ship()

    for (let i = 0; i < 3; i++){
    let heart = document.createElement("img")
    heart.src = "./Images/heart.png" 
    heart.style.position = "absolute"
    heart.style.top = "10px"
    heart.style.left = `${10 + i * 30}px`
    heart.style.width = "45px"
    heart.style.height = "45px"
    heart.style.zIndex = "20"
    
    gameBoxNode.append(heart)
    healthBar.push(heart)
}
 
if (gameInterval) clearInterval(gameInterval);
  gameInterval = setInterval(gameLoop, 1000 / 60);

}

function gameLoop(){
    frameCounter++
    // obs spawn
    if (frameCounter % 120 === 0){
        let gapSize = 250
        let minHeight = -120
        let maxHeight = 0

        let randomObjY = Math.floor(Math.random() * (maxHeight - minHeight) + minHeight)
        
        let topObstacle = new Obstacle(randomObjY, false);

        let bottomObstacle  = new Obstacle(randomObjY + 200 + gapSize, true)

        obstacleArr.push(topObstacle)
        obstacleArr.push(bottomObstacle)
    }
    obstacleArr.forEach(objs => {
        objs.automaticMovement()

    });
        // background planet spawn

    if (frameCounter % 300 === 0){
        let minHeight = 400*0.25
        let maxHeight = 400*0.75
        let randomPlanetY = Math.floor(Math.random() * (maxHeight - minHeight) + minHeight)
        
        let newPlanet = new Planet(randomPlanetY);

        planetArr.push(newPlanet)
    }
    planetArr.forEach(objs => {
        objs.automaticMovement()

    });

    // for asteriod each size different interavals
    // asteriod planet spawn

    if (frameCounter % 240 === 0){
        const spawnRandom = Math.floor(Math.random() * 3)
        let positionX
        let positionY
        let asteriod

        if (spawnRandom === 0){
            positionX = 600 + 100
            positionY = Math.random() * (400 * 0.3)
            asteriod = new AsteriodMediumRight(positionX, positionY)
        }

        if (spawnRandom === 1){
            positionX = 400 + Math.random() * 200
            positionY = -100
            asteriod = new AsteriodMediumTop(positionX, positionY)
        }

        if (spawnRandom === 2){
            positionX = 400 + Math.random() * 200
            positionY = 400 + 100
            asteriod = new AsteriodMediumBottom(positionX, positionY)
        }
        
        asteriodArr.push(asteriod)
        

    }
    asteriodArr.forEach(obj => {
        obj.automaticMovement()
    })


    if (frameCounter % 120== 0){
        const spawnRandom = Math.floor(Math.random() * 3)
        let positionX
        let positionY
        let asteriod

        if (spawnRandom === 0){
            positionX = 600 + 100
            positionY = Math.random() * (400 * 0.3)
            asteriod = new AsteriodSmallRight(positionX, positionY)
        }

        if (spawnRandom === 1){
            positionX = 400 + Math.random() * 200
            positionY = -100
            asteriod = new AsteriodSmallTop(positionX, positionY)
        }

        if (spawnRandom === 2){
            positionX = 400 + Math.random() * 200
            positionY = 400 + 100
            asteriod = new AsteriodSmallBottom(positionX, positionY)
        }
        
        asteriodArr.push(asteriod)
        

    }
    asteriodArr.forEach(obj => {
        obj.automaticMovement()
    });


    lazerArr.forEach(obj => {
        obj.automaticMovement()
        });

    shipVsAsteriod()
    shipVsObstacle()
    lazerVsSteriod()

}


function gameOver(){
    startScreenNode.style.display = "none"
    gameScreenNode.style.display = "none"
    gameOverScreen.style.display = "flex"
    
    
}


function restartGame() {
      shipObj = null
      obstacleArr = []
      asteriodArr = []
      planetArr = []
      lazerArr = []
      frameCounter = 0
      gameBoxNode.innerHTML = null
      healthBar = []

      clearInterval(gameInterval);
      gameInterval = null;


      startGame()
};

// event listeners


startBtnNode.addEventListener("click", startGame);
restartBtnNode.addEventListener("click", restartGame);

document.addEventListener("keydown", (event) =>{
    if (event.key === "ArrowUp"){
           shipObj.flyUp()
     }
})
document.addEventListener("keydown", (event) =>{
    if (event.key === "ArrowDown"){
           shipObj.flyDown()
     }
})
document.addEventListener("keydown", (event) =>{
    if (event.key === "ArrowLeft"){
           shipObj.flyLeft()
     }
})
document.addEventListener("keydown", (event) =>{
    if (event.key === "ArrowRight"){
           shipObj.flyRight()
     }
})

document.addEventListener("keydown", (event) =>{
    if (event.code === "Space"){
        shootLazer()
    }
})
