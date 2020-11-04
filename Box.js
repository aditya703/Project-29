class Block{
  constructor(x, y){
    var options = {
        friction:1.5,
        density:1.0
    }

    this.width = 30;
    this.height = 40;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    var Pos = this.body.position;
    push();
    translate(Pos.x, Pos.y);
    rotate(angle);
    fill("white");
    rect(0, 0, this.width, this.height);
    pop();
  }
}