class Obstacle {
 
  constructor(positionY, isImageUp) {

    this.node = document.createElement("img");

    if (isImageUp === true) {
      this.node.src = "./Images/Obstacle/Obstacle_tall_bottom.png";
    } else {
      this.node.src = "./Images/Obstacle/Obstacle_tall_top.png";
    }

    gameBoxNode.append(this.DOMElement);

    this.x = 600;
    this.y = positionY;
    this.w = 40;
    this.h = 200;
    this.speed = 1.4;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    // this.node.style.zIndex = 5
  }

  automaticMovement(){
    this.x -= this.speed;
    this.node.style.left = `${this.x}px`;
  }

}