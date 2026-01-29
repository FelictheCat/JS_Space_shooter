class Lazer{
    constructor(positionX, positionY) {
    this.node = document.createElement("img")
    this.node.src = "./Images/sprite_45.png"
     gameBoxNode.append(this.node)

    this.x = positionX
    this.y = positionY
    this.w = 51
    this.h = 32

    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`
    this.node.style.width = `${this.w}px`
    this.node.style.height = `${this.h}px`

    this.speed = 4

    this.node.style.zIndex = 9

  }

automaticMovement() {
    this.x += this.speed
    this.node.style.left = `${this.x}px`
  }

}
