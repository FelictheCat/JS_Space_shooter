class Planet {

  constructor(positionY) {

    this.node = document.createElement("img")
    this.node.src = "./images/Planets/planet_27"

    gameBoxNode.append(this.node)

    this.x = 500
    this.y = positionY
    this.width = 50
    this.height = 50

    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`
    this.node.style.width = `${this.width}px`
    this.node.style.height = `${this.height}px`

    this.speed = 1.8

    this.node.style.zIndex = 3

  }

automaticMovement() {
    this.x -= this.speed
    this.node.style.left = `${this.x}px`
  }

}