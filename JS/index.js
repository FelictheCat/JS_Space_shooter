// Dom elements
/*
z index 

background = 1
ship = 10
lazer = 9
obstacles  = 5
planets = 3
asteriods = 8


*/
const startScreenNode = document.querySelector("#start-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameOverScreen = document.querySelector("#game-over-screen")

const startBtnNode = document.querySelector("#startGameBtn")
const restartBtnNode = document.querySelector("#restartBtn")

const gameBoxNode = document.querySelector("#game-box")

//game variables

let shipObj = null
let obstacleobj = []
let asteriodObj = [] //turn to array
let planetObj = []
let lazerObj = []

let frameCounter = 0

// let lazerObj = null


//game functions

// can i make a golbal collision check? makes more sense - will check google
// yes i can will look very basic - but will help me also code is the bullet collison easier


function checkCollison(objA, objB){
    if(
        objA.x < objB.x + objB.w &&
        objA.x + objA.w > objB.x &&
        objA.y < objB.y + objB.h &&
        objA.y + objA.h > objB.y
    ) {
    return true;
    }   else {
        return false
    }}


function shipVsAsteriod(){
    asteriodObj.forEach(asteriod => {
        if (checkCollison(shipObj, asteriod)){
            gameOver()
        }
    })
}


function shipVsObstacle(){
    obstacleobj.forEach(obstacle =>{
        if (checkCollison(shipObj, obstacle)){
            gameOver()
        }
    })
}

function lazerVsSteriod(){
        asteriodObj.forEach(asteriod => {
        if (checkCollison(lazerObj, asteriod)){
        }
    })
}



function shootLazer(){
    if (!shipObj)return
    const positionX = shipObj.x + shipObj.w
    const positionY = shipObj.y + shipObj.h/2  

    const lazer = new Lazer(positionX, positionY)
    lazerObj.push(lazer)
    console.log(lazer.node)
}

// for bullet collsion get asteriod to turn in do display none then work out how to display explosion? 
// or code the explosion into true/false in the asteriod Class builder




function startGame() {
    startScreenNode.style.display = "none"
    gameScreenNode.style.display = "flex"

    shipObj = new Ship()
    
    setInterval(gameLoop, Math.round(1000/60))
}

function gameLoop(){
    frameCounter++
    // obs spawn
    if (frameCounter % 120 === 0){
        let gapSize = 160
        let minHeight = -120
        let maxHeight = 0

        let randomObjY = Math.floor(Math.random() * (maxHeight - minHeight) + minHeight)
        
        let topObstacle = new Obstacle(randomObjY, false);

        let bottomObstacle  = new Obstacle(randomObjY + 200 + gapSize, true)

        obstacleobj.push(topObstacle)
        obstacleobj.push(bottomObstacle)
    }
    obstacleobj.forEach(objs => {
        objs.automaticMovement()

    });
        // background planet spawn

    if (frameCounter % 300 === 0){
        let minHeight = 400*0.25
        let maxHeight = 400*0.75
        let randomPlanetY = Math.floor(Math.random() * (maxHeight - minHeight) + minHeight)
        
        let newPlanet = new Planet(randomPlanetY);

        planetObj.push(newPlanet)
    }
    planetObj.forEach(objs => {
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
            positionY = Math.random() * (600 * 0.3)
            asteriod = new AsteriodMediumRight(positionX, positionY)
        }

        if (spawnRandom === 1){
            positionX = Math.random() * (600 * 0.7)
            positionY = -100
            asteriod = new AsteriodMediumTop(positionX, positionY)
        }

        if (spawnRandom === 2){
            positionX = Math.random() * (600 * 0.7)
            positionY = 400 + 100
            asteriod = new AsteriodMediumBottom(positionX, positionY)
        }
        
        asteriodObj.push(asteriod)
        

    }
    asteriodObj.forEach(obj => {
        obj.automaticMovement()
    })


    if (frameCounter % 120== 0){
        const spawnRandom = Math.floor(Math.random() * 3)
        let positionX
        let positionY
        let asteriod

        if (spawnRandom === 0){
            positionX = 600 + 100
            positionY = Math.random() * (600 * 0.3)
            asteriod = new AsteriodSmallRight(positionX, positionY)
        }

        if (spawnRandom === 1){
            positionX = Math.random() * (600 * 0.7)
            positionY = -100
            asteriod = new AsteriodSmallTop(positionX, positionY)
        }

        if (spawnRandom === 2){
            positionX = Math.random() * (600 * 0.7)
            positionY = 400 + 100
            asteriod = new AsteriodSmallBottom(positionX, positionY)
        }
        
        asteriodObj.push(asteriod)
        

    }
    asteriodObj.forEach(obj => {
        obj.automaticMovement()
    });


    lazerObj.forEach(obj => {
        obj.automaticMovement()
        });

    shipVsAsteriod()
    shipVsObstacle()



}


function gameOver(){
    startScreenNode.style.display = "none"
    gameScreenNode.style.display = "none"
    gameOverScreen.style.display = "flex"
    
    
}


function restartGame() {
      shipObj = null
      obstacleobj = []
      asteriodObj = []
      planetObj = []
      lazerObj = []
      frameCounter = 0
      gameBoxNode.innerHTML = null

    //   const gameBoxNode = document.querySelector("#game-box")


      startGame()
};


// Event listeners


// startScreenNode.addEventListener("keydown", (event) => {
//     if (event.key === " ") {
//         startGame();
//         }
// }) try later the click works

startBtnNode.addEventListener("click", startGame);
//restartBtnNode.addEventListener("click", restartGame);

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

// add eventkey for R to restart state 
restartBtnNode.addEventListener("click", restartGame);

// document.addEventListener("keydown", (event) =>{
//     if (event.key === "r"){
//           restartGame()
//      }
// })

document.addEventListener("keydown", (event) => {
  console.log(event);
});