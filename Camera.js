class Camera
{
  constructor(x,y,ang)
  {
    this.fov = radians(90);
    this.x = x;
    this.y = y;
    this.ang = ang;
    this.minAng = ang-this.fov/2
    this.maxAng = ang+this.fov/2
    this.rayAmount = 90;
    this.speed = 10;
    this.lookSpeed = 0.02
    
    
    this.rays = [];
    for (var i = 0; i < this.rayAmount; i++)
    {
      this.rays.push(new Ray(this.x,this.y,map(i,0,this.rayAmount,this.minAng,this.maxAng)))
    }
  }
  
  update()
  {
    
    this.minAng = this.ang-this.fov/2
    this.maxAng = this.ang+this.fov/2
    
    //remake rays
    this.rays = [];
    for (var i = 0; i < this.rayAmount; i++)
    {
      this.rays.push(new Ray(this.x,this.y,map(i,0,this.rayAmount,this.minAng,this.maxAng)))
    }
    
    //movement
    if (keyIsDown(65))//a
    {
      this.x-=this.speed
    }
    if (keyIsDown(87))//w
    {
      this.y-=this.speed
    }
    if (keyIsDown(68))//d
    {
      this.x+=this.speed
    }
    if (keyIsDown(83))//s
    {
      this.y+=this.speed
    }
    
    //look controls
    if (keyIsDown(81))//q
    {
      this.ang-=this.lookSpeed
    }
      
    if (keyIsDown(69))//d
    {
      this.ang+=this.lookSpeed
    }
  }
  
  draw(debug)
  {
    push();
    circle(this.x,this.y,30)
    stroke('red' )
    for (var i = 0; i < this.rays.length; i++)
    {
      this.rays[i].update();
      this.rays[i].draw();
    }
    pop();
  }
}