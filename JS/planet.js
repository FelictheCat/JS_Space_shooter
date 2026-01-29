class Planet {

  constructor(positionY) {

    this.node = document.createElement("img")
    const planetImages = [
        "./Images/Planets/planet_18.png",
        "./Images/Planets/planet_19.png",
        "./Images/Planets/planet_20.png",
        "./Images/Planets/planet_21.png",
        "./Images/Planets/planet_22.png",
        "./Images/Planets/planet_23.png",
        "./Images/Planets/planet_24.png",
        "./Images/Planets/planet_25.png",
        "./Images/Planets/planet_26.png",
        "./Images/Planets/planet_27.png",
        "./Images/Planets/planet_28.png",
        "./Images/Planets/planet_29.png",
        "./Images/Planets/planet_30.png",
        "./Images/Planets/planet_31.png",
        "./Images/Planets/planet_32.png",
        "./Images/Planets/planet_33.png"
                        ]


    this.node = document.createElement("img")
    this.node.src = planetImages[Math.floor(Math.random() * planetImages.length)]
    gameBoxNode.append(this.node)

    this.x = 500
    this.y = positionY
    this.width = 50
    this.height = 50

    this.node.style.position = "absolute"
    this.node.style.opacity = "0.35"
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