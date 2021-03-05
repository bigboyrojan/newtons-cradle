class roof {
    
    constructor (x,y,width,height){
    
    
    var choices = {
    isStatic: true
    
    }
    this.body = Bodies.rectangle (x,y,width,height, choices);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
    }
    display() {
    var top = this.body.position;
    fill(116);
    rectMode(CENTER);
    rect(top.x, top.y, this.width, this.height);
    
    }
    
    }