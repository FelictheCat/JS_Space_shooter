// Dom elements
/*
z index 

background = 1
ship = 10
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

let frameCounter = 0

// let lazerObj = null


//game functions
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
        let minHeight = -120
        let maxHeight = 0
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
            asteriod = new AsteriodLargeRight(positionX, positionY)
        }

        if (spawnRandom === 1){
            positionX = Math.random() * (600 * 0.3)
            positionY = -100
            asteriod = new AsteriodLargeTop(positionX, positionY)
        }

        if (spawnRandom === 2){
            positionX = Math.random() * (600 * 0.3)
            positionY = 400 + 100
            asteriod = new AsteriodLargeBottom(positionX, positionY)
        }
        
        asteriodObj.push(asteriod)

    }




}





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

// console.log(KeyboardEvent)

