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
  draw(size)
  {
    
    var fx1 = map(this.x1,0,width,0,size)
    var fy1 = map(this.y1,0,height,0,size)
    var fx2 = map(this.x2,0,width,0,size)
    var fy2 = map(this.y2,0,height,0,size)
    
    push();
    fill(0)
    strokeWeight(1)
    line(fx1,fy1,fx2,fy2)
    pop();
  }
  update(){
    

  }
}