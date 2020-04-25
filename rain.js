class Rain{
    constructor(x,y) {
      var options = {
        'restitution':0.3,
        'friction':0.5,
        'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 4, 8, options);
      this.w = 4; 
      this.h = 8;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(0);
      rect(pos.x, pos.y, this.w,this.h);
    }
  };