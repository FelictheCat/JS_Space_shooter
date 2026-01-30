const asteriodsImages = [
        "./Images/Asteroids/Medium/a10000.png",
        "./Images/Asteroids/Medium/a10001.png",
        "./Images/Asteroids/Medium/a10002.png",
        "./Images/Asteroids/Medium/a10003.png",
        "./Images/Asteroids/Medium/a10004.png",
        "./Images/Asteroids/Medium/a10005.png",
        "./Images/Asteroids/Medium/a10006.png",
        "./Images/Asteroids/Medium/a10007.png",
        "./Images/Asteroids/Medium/a10008.png",
        "./Images/Asteroids/Medium/a10009.png",
        "./Images/Asteroids/Medium/a10010.png",
        "./Images/Asteroids/Medium/a10011.png",
        "./Images/Asteroids/Medium/a10012.png",
        "./Images/Asteroids/Medium/a10013.png",
        "./Images/Asteroids/Medium/a10014.png",
        "./Images/Asteroids/Medium/a10015.png",
      ]

const asteriodsSmallImages = [
        "./Images/Asteroids/Small/a10000.png",
        "./Images/Asteroids/Small/a10001.png",
        "./Images/Asteroids/Small/a10002.png",
        "./Images/Asteroids/Small/a10003.png",
        "./Images/Asteroids/Small/a10004.png",
        "./Images/Asteroids/Small/a10005.png",
        "./Images/Asteroids/Small/a10006.png",
        "./Images/Asteroids/Small/a10007.png",
        "./Images/Asteroids/Small/a10008.png",
        "./Images/Asteroids/Small/a10009.png",
        "./Images/Asteroids/Small/a10010.png",
        "./Images/Asteroids/Small/a10011.png",
        "./Images/Asteroids/Small/a10012.png",
        "./Images/Asteroids/Small/a10013.png",
        "./Images/Asteroids/Small/a10014.png",
        "./Images/Asteroids/Small/a10015.png",
      ]

const explosionImage = [
        "./Images/Explosions/expl_10_0011.png",
        "./Images/Explosions/expl_10_0018.png",
        "./Images/Explosions/expl_10_0025.png",
        "./Images/Explosions/expl_11_0016.png",
        "./Images/Explosions/expl_11_0022.png",       
      ]


      
class AsteriodMediumRight {

  constructor(positionX, positionY) {
    this.isDestroyed = false;


    this.node = document.createElement("img")
    this.node.src = asteriodsImages[Math.floor(Math.random() * asteriodsImages.length)]
    gameBoxNode.append(this.node)

    this.x = positionX
    this.y = positionY
    this.w = 120
    this.h = 120

    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`
    this.node.style.width = `${this.w}px`
    this.node.style.height = `${this.h}px`

    this.speed = 1.1

    this.node.style.zIndex = 3
  }

destroy(){
    if (this.isDestroyed) return;
    this.isDestroyed = true;

    this.node.src = explosionImage[Math.floor(Math.random() * explosionImage.length)]
    gameBoxNode.append(this.node)

setTimeout(() => {
  this.node.remove();
}, 300);

}

automaticMovement() {
    this.x -= this.speed
    this.node.style.left = `${this.x}px`
  }

}

class AsteriodMediumTop {

  constructor(positionX, positionY) {
    this.isDestroyed = false;

    this.node = document.createElement("img")
    this.node.src = asteriodsImages[Math.floor(Math.random() * asteriodsImages.length)]
    gameBoxNode.append(this.node)

    this.x = positionX
    this.y = positionY
    this.w = 120
    this.h = 120

    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`
    this.node.style.width = `${this.w}px`
    this.node.style.height = `${this.h}px`

    this.speed = 1.1

    this.node.style.zIndex = 3

  }

destroy(){
    if (this.isDestroyed) return;
    this.isDestroyed = true;

    this.node.src = explosionImage[Math.floor(Math.random() * explosionImage.length)]
    gameBoxNode.append(this.node)

setTimeout(() => {
  this.node.remove();
}, 300);

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
    this.isDestroyed = false;

    this.node = document.createElement("img")
    this.node.src = asteriodsImages[Math.floor(Math.random() * asteriodsImages.length)]
    gameBoxNode.append(this.node)

    this.x = positionX
    this.y = positionY
    this.w = 120
    this.h = 120

    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`
    this.node.style.width = `${this.w}px`
    this.node.style.height = `${this.h}px`

    this.speed = 1.1

    this.node.style.zIndex = 3

  }

  destroy(){
    if (this.isDestroyed) return;
    this.isDestroyed = true;

    this.node.src = explosionImage[Math.floor(Math.random() * explosionImage.length)]
    gameBoxNode.append(this.node)

setTimeout(() => {
  this.node.remove();
}, 300);

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
    this.isDestroyed = false;

    this.node = document.createElement("img")
    this.node.src = asteriodsSmallImages[Math.floor(Math.random() * asteriodsSmallImages.length)]
    gameBoxNode.append(this.node)

    this.x = positionX
    this.y = positionY
    this.w = 64
    this.h = 64

    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`
    this.node.style.width = `${this.w}px`
    this.node.style.height = `${this.h}px`

    this.speed = 1.1

    this.node.style.zIndex = 4

  }

  destroy(){
    if (this.isDestroyed) return;
    this.isDestroyed = true;

    this.node.src = explosionImage[Math.floor(Math.random() * explosionImage.length)]
    gameBoxNode.append(this.node)

setTimeout(() => {
  this.node.remove();
}, 300);

}

automaticMovement() {
    this.x -= this.speed
    this.node.style.left = `${this.x}px`
  }

}

class AsteriodSmallTop {

  constructor(positionX, positionY) {
    this.isDestroyed = false;
    
    this.node = document.createElement("img")
    this.node.src = asteriodsSmallImages[Math.floor(Math.random() * asteriodsSmallImages.length)]
    gameBoxNode.append(this.node)

    this.x = positionX
    this.y = positionY
    this.w = 64
    this.h = 64

    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`
    this.node.style.width = `${this.w}px`
    this.node.style.height = `${this.h}px`

    this.speed = 1.1

    this.node.style.zIndex = 4

  }

  destroy(){
    if (this.isDestroyed) return;
    this.isDestroyed = true;

    this.node.src = explosionImage[Math.floor(Math.random() * explosionImage.length)]
    gameBoxNode.append(this.node)

setTimeout(() => {
  this.node.remove();
}, 300);

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
    this.isDestroyed = false;

    this.node = document.createElement("img")
    this.node.src = asteriodsSmallImages[Math.floor(Math.random() * asteriodsSmallImages.length)]
    gameBoxNode.append(this.node)

    this.x = positionX
    this.y = positionY
    this.w = 64
    this.h = 64

    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`
    this.node.style.width = `${this.w}px`
    this.node.style.height = `${this.h}px`

    this.speed = 1.1

    this.node.style.zIndex = 4

  }

  destroy(){
    if (this.isDestroyed) return;
    this.isDestroyed = true;

    this.node.src = explosionImage[Math.floor(Math.random() * explosionImage.length)]
    gameBoxNode.append(this.node)

setTimeout(() => {
  this.node.remove();
}, 300);

}

automaticMovement() {
    this.x -= this.speed
    this.node.style.left = `${this.x}px`
    this.y -= this.speed
    this.node.style.top = `${this.y}px`
  }

}
