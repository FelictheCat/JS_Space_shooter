const asteriodsImages = [
        "./Images/Asteriod/Large/a10000.png",
        "./Images/Asteriod/Large/a10001.png",
        "./Images/Asteriod/Large/a10002.png",
        "./Images/Asteriod/Large/a10003.png",
        "./Images/Asteriod/Large/a10004.png",
        "./Images/Asteriod/Large/a10005.png",
        "./Images/Asteriod/Large/a10006.png",
        "./Images/Asteriod/Large/a10007.png",
        "./Images/Asteriod/Large/a10008.png",
        "./Images/Asteriod/Large/a10009.png",
        "./Images/Asteriod/Large/a10010.png",
        "./Images/Asteriod/Large/a10011.png",
        "./Images/Asteriod/Large/a10012.png",
        "./Images/Asteriod/Large/a10013.png",
        "./Images/Asteriod/Large/a10014.png",
        "./Images/Asteriod/Large/a10015.png",
      ]


class AsteriodLargeRight {

  constructor(positionX, positionY) {
    this.node = document.createElement("img")
    this.node.src = asteriodsImages[Math.floor(Math.random() * asteriodsImages.length)]
    gameBoxNode.append(this.node)

    this.x = positionX
    this.y = positionY
    this.width = 100
    this.height = 100

    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`
    this.node.style.width = `${this.width}px`
    this.node.style.height = `${this.height}px`

    this.speed = 1.1

    // this.node.style.zIndex = 3

  }

automaticMovement() {
    this.x -= this.speed
    this.node.style.left = `${this.x}px`
  }

}

class AsteriodLargeTop {

  constructor(positionX, positionY) {
    this.node = document.createElement("img")
    this.node.src = asteriodsImages[Math.floor(Math.random() * asteriodsImages.length)]
    gameBoxNode.append(this.node)

    this.x = positionX
    this.y = positionY
    this.width = 100
    this.height = 100

    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`
    this.node.style.width = `${this.width}px`
    this.node.style.height = `${this.height}px`

    this.speed = 1.1

    // this.node.style.zIndex = 3

  }

automaticMovement() {
    this.x -= this.speed
    this.node.style.left = `${this.x}px`
    this.y += this.speed
    this.node.style.top = `${this.y}px`
  }

}

class AsteriodLargeBottom {

  constructor(positionX, positionY) {

    this.node = document.createElement("img")
    this.node.src = asteriodsImages[Math.floor(Math.random() * asteriodsImages.length)]
    gameBoxNode.append(this.node)

    this.x = positionX
    this.y = positionY
    this.width = 100
    this.height = 100

    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`
    this.node.style.width = `${this.width}px`
    this.node.style.height = `${this.height}px`

    this.speed = 1.1

    // this.node.style.zIndex = 3

  }

automaticMovement() {
    this.x -= this.speed
    this.node.style.left = `${this.x}px`
    this.y -= this.speed
    this.node.style.top = `${this.y}px`
  }

}