class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.ground = Bodies.rectangle(450,390,900,20,options);
      World.add(world, this.ground);
    }
    
    display(){
      strokeWeight(2);
      rectMode(CENTER);
      fill("black");
      rect(this.position.x,this.position.y, this.ground.position.y,900,20);
   }
  }