class Ship{

    constructor(){
    this.node = document.createElement("img")
    this.node.src = "./Images/Fighter/fighterspr1.png"

    gameBoxNode.append(this.node)

    this.x = 100
    this.y = 300
    this.width = 40
    this.height = 35

    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`
    this.node.style.width = `${this.width}px`
    this.node.style.height = `${this.height}px`

    this.movemet = 20
    }

    flyUp(){
        if(this.y > 1){
        this.y -= this.movemet
        this.node.style.top = `${this.y}px`
        }
    }

    flyDown(){
        if(this.y > 1){
        this.y += this.movemet
        this.node.style.top = `${this.y}px`
        }
    }

    flyLeft(){
        if(this.x < 1){
        this.x -= this.movemet
        this.node.style.left = `${this.x}px`
        }
    }

    flyRight(){
        if(this.x > 1){
        this.x += this.movemet
        this.node.style.left = `${this.x}px`
        }
    }




}