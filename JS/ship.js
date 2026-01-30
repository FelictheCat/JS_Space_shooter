class Ship{

    constructor(){

    this.isDestroyed = false;
    this.hits = 3
    this.isInvulnerable = false



    this.node = document.createElement("img")
    this.node.src = "./Images/Fighter/topdownfighter.png"

    gameBoxNode.append(this.node)

    this.x = 100
    this.y = 300
    this.w = 40
    this.h = 35

    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`
    this.node.style.width = `${this.w}px`
    this.node.style.height = `${this.h}px`

    this.node.style.zIndex = 10

    this.movemet = 20

    

    }

    flyUp(){
        if(this.y > 1){
        this.y -= this.movemet
        this.node.style.top = `${this.y}px`
        }
    }

    flyDown(){
        if(this.y < 400 - this.h){
        this.y += this.movemet
        this.node.style.top = `${this.y}px`
        }
    }

    flyLeft(){
        if(this.x > 1){
        this.x -= this.movemet
        this.node.style.left = `${this.x}px`
        }
    }

    flyRight(){
        if(this.x < 600 - this.w ){
        this.x += this.movemet
        this.node.style.left = `${this.x}px`
        }
    }


    shipDestroyed(){
        this.isDestroyed = true
        this.node.src = explosionImage[Math.floor(Math.random() * explosionImage.length)]
        gameBoxNode.append(this.node)

    }

}