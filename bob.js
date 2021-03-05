class bob  {
    constructor (x,y,radius){
    
    var choices = {
        isStatic: true,
        density: 1.2,
        restitution: 0.3,
        friction: 0.5,
       
    }
    this.body = Bodies.circle(x,y,radius, choices);
    this.radius = radius;
    
    
    
    World.add(world, this.body);
    }
    display() {
    var ball = this.body.position;
    ellipseMode(RADIUS);
    fill(173,216,230);
    ellipse(ball.x,ball.y,this.radius)
    
    }
    
    }