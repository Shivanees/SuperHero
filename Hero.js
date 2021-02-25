class Hero{
constructor(x,y,r){
var options = {
    density: 1,
    frictionAir: 1
};
  this.x=x;
  this.y=y;
  this.r=r;
  this.image=loadImage("Superhero-01.png");
  this.body=Bodies.circle(this.x,this.y,(this.r)/2,options);
  World.add(world,this.body);
}
display(){
    var angle = this.body.angle;
    var pos= this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
    pop();
  }
}