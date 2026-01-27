// Dom elements

const startScreenNode = document.querySelector("#start-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameOverScreen = document.querySelector("#game-over-screen")

const startBtnNode = document.querySelector("#startGameBtn")
const restartBtnNode = document.querySelector("#restartBtn")

const gameBoxNode = document.querySelector("#game-box")

//game variables

let shipObj = null
let obstacleobj = null
let asteriodObj = null
let planetObj = null

// let lazerObj = null


//game functions
function startGame() {
    startScreenNode.style.display = "none"
    gameScreenNode.style.display = "flex"

    shipObj = new Ship()
    obstacleobj = new Obstacle()
    asteriodObj = new Asteriod()
    planetObj = new Planet()



    setInterval(gameLoop, Math.round(1000/60))
}

function gameLoop(){

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
    if (event.key === "Arrowleft"){
           shipObj.flyLeft()
     }
})
document.addEventListener("keydown", (event) =>{
    if (event.key === "ArrowRight"){
           shipObj.flyRight()
     }
})

console.log(KeyboardEvent)

