const asteriodsImages = [
        "./Images/Asteriods/Medium/a10000.png",
        "./Images/Asteriods/Medium/a10001.png",
        "./Images/Asteriods/Medium/a10002.png",
        "./Images/Asteriods/Medium/a10003.png",
        "./Images/Asteriods/Medium/a10004.png",
        "./Images/Asteriods/Medium/a10005.png",
        "./Images/Asteriods/Medium/a10006.png",
        "./Images/Asteriods/Medium/a10007.png",
        "./Images/Asteriods/Medium/a10008.png",
        "./Images/Asteriods/Medium/a10009.png",
        "./Images/Asteriods/Medium/a10010.png",
        "./Images/Asteriods/Medium/a10011.png",
        "./Images/Asteriods/Medium/a10012.png",
        "./Images/Asteriods/Medium/a10013.png",
        "./Images/Asteriods/Medium/a10014.png",
        "./Images/Asteriods/Medium/a10015.png",
      ]

const asteriodsSmallImages = [
        "./Images/Asteriods/Small/a10000.png",
        "./Images/Asteriods/Small/a10001.png",
        "./Images/Asteriods/Small/a10002.png",
        "./Images/Asteriods/Small/a10003.png",
        "./Images/Asteriods/Small/a10004.png",
        "./Images/Asteriods/Small/a10005.png",
        "./Images/Asteriods/Small/a10006.png",
        "./Images/Asteriods/Small/a10007.png",
        "./Images/Asteriods/Small/a10008.png",
        "./Images/Asteriods/Small/a10009.png",
        "./Images/Asteriods/Small/a10010.png",
        "./Images/Asteriods/Small/a10011.png",
        "./Images/Asteriods/Small/a10012.png",
        "./Images/Asteriods/Small/a10013.png",
        "./Images/Asteriods/Small/a10014.png",
        "./Images/Asteriods/Small/a10015.png",
      ]

class AsteriodMediumRight {

  constructor(positionX, positionY) {
    this.node = document.createElement("img")
    this.node.src = asteriodsImages[Math.floor(Math.random() * asteriodsImages.length)]
    gameBoxNode.append(this.node)

    this.x = positionX
    this.y = positionY
    this.width = 120
    this.height = 120

    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`
    this.node.style.width = `${this.width}px`
    this.node.style.height = `${this.height}px`

    this.speed = 1.1

    this.node.style.zIndex = 3

  }

automaticMovement() {
    this.x -= this.speed
    this.node.style.left = `${this.x}px`
  }

}

class AsteriodMediumTop {

  constructor(positionX, positionY) {
    this.node = document.createElement("img")
    this.node.src = asteriodsImages[Math.floor(Math.random() * asteriodsImages.length)]
    gameBoxNode.append(this.node)

    this.x = positionX
    this.y = positionY
    this.width = 120
    this.height = 120

    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`
    this.node.style.width = `${this.width}px`
    this.node.style.height = `${this.height}px`

    this.speed = 1.1

    this.node.style.zIndex = 3

  }

automaticMovement() {
    this.x -= this.speed
    this.node.style.left = `${this.x}px`
    this.y += this.speed
    this.node.style.top = `${this.y}px`
  }

}

class AsteriodMediumBottom {

  constructor(positionX, positionY) {

    this.node = document.createElement("img")
    this.node.src = asteriodsImages[Math.floor(Math.random() * asteriodsImages.length)]
    gameBoxNode.append(this.node)

    this.x = positionX
    this.y = positionY
    this.width = 120
    this.height = 120

    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`
    this.node.style.width = `${this.width}px`
    this.node.style.height = `${this.height}px`

    this.speed = 1.1

    this.node.style.zIndex = 3

  }

automaticMovement() {
    this.x -= this.speed
    this.node.style.left = `${this.x}px`
    this.y -= this.speed
    this.node.style.top = `${this.y}px`
  }

}



class AsteriodSmallRight {

  constructor(positionX, positionY) {
    this.node = document.createElement("img")
    this.node.src = asteriodsSmallImages[Math.floor(Math.random() * asteriodsSmallImages.length)]
    gameBoxNode.append(this.node)

    this.x = positionX
    this.y = positionY
    this.width = 64
    this.height = 64

    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`
    this.node.style.width = `${this.width}px`
    this.node.style.height = `${this.height}px`

    this.speed = 1.1

    this.node.style.zIndex = 4

  }

automaticMovement() {
    this.x -= this.speed
    this.node.style.left = `${this.x}px`
  }

}

class AsteriodSmallTop {

  constructor(positionX, positionY) {
    this.node = document.createElement("img")
    this.node.src = asteriodsSmallImages[Math.floor(Math.random() * asteriodsSmallImages.length)]
    gameBoxNode.append(this.node)

    this.x = positionX
    this.y = positionY
    this.width = 64
    this.height = 64

    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`
    this.node.style.width = `${this.width}px`
    this.node.style.height = `${this.height}px`

    this.speed = 1.1

    this.node.style.zIndex = 4

  }

automaticMovement() {
    this.x -= this.speed
    this.node.style.left = `${this.x}px`
    this.y += this.speed
    this.node.style.top = `${this.y}px`
  }

}

class AsteriodSmallBottom {

  constructor(positionX, positionY) {

    this.node = document.createElement("img")
    this.node.src = asteriodsSmallImages[Math.floor(Math.random() * asteriodsSmallImages.length)]
    gameBoxNode.append(this.node)

    this.x = positionX
    this.y = positionY
    this.width = 64
    this.height = 64

    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`
    this.node.style.width = `${this.width}px`
    this.node.style.height = `${this.height}px`

    this.speed = 1.1

    this.node.style.zIndex = 4

  }

automaticMovement() {
    this.x -= this.speed
    this.node.style.left = `${this.x}px`
    this.y -= this.speed
    this.node.style.top = `${this.y}px`
  }

}
