class Wall
{
  
  //creates random walls 
  constructor()
  {
    this.x1 = random(0,width)
    this.y1 = random(0,height)
    this.x2 = random(0,width)
    this.y2 = random(0,height)
  }
  
  
  //draw wall as line
  draw()
  {
    push();
    stroke(255)
    fill(255)
    strokeWeight(1)
    line(this.x1,this.y1,this.x2,this.y2)
    pop();
  }
  update(){
    

  }
}