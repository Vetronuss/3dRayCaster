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
    this.rayAmount = 200;
    this.speed = 10;
    this.lookSpeed = 0.04
    
    
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
      this.ang-=this.lookSpeed
    }
    if (keyIsDown(87))//w
    {
      this.x+=cos(this.ang)
      this.y+=sin(this.ang)
    }
    if (keyIsDown(68))//d
    {
      this.ang+=this.lookSpeed
    }
    if (keyIsDown(83))//s
    {
      this.x-=cos(this.ang)
      this.y-=sin(this.ang)
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
  
  draw3d()
  {
    
    
    
    
    
    for (var i = 0; i < this.rays.length; i++)
    {
      this.rays[i].update();
      this.rays[i].draw();
    }
    push();
    noStroke()
    
    //sky and ground
    var skyDetail = 10;
    for (var s = 0; s < height/2; s+=skyDetail)
    {
      fill(lerpColor(color('cyan'),color('blue'),s/height/1.9))
      rect(0,s,width,skyDetail);
    }
    //97, 69, 42,    87, 65, 44
    for (var s = height/2; s < height; s+=skyDetail)
    {
      fill(lerpColor(color(97*1.2, 69*1.2, 42*1.2),color(87, 65, 44),map(s,height/2,height,0,1)))
      rect(0,s,width,skyDetail+2);
    }
    
    //walls
    
     for (var i = 0; i < this.rays.length; i++)
     {
       if (this.rays[i].endCoord.length > 0){
         let od = dist(this.x,this.y,this.rays[i].endCoord[0],this.rays[i].endCoord[1])
         od = 1/od * 20000; 
         
         let d = od
         let clr = lerpColor(color(0,10,20,240),color(255),d/100)
         fill(clr)
      
         rect(floor(i*(width/this.rayAmount)),height/2-od/2,ceil(width/this.rayAmount),od)
       }else
       {
        fill(0)
        //rect(i*(width/this.rayAmount),0,width/this.rayAmount,height)
       }
     }
    pop();
  }
}





