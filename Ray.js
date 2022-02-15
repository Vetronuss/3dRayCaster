class Ray
{
  constructor(x,y,ang)
  {
    this.x = x;
    this.y = y;
    this.ang = ang;
    this.length = 1000;
    
    this.endCoord = [];
  }
  
  update()
  {
    var hit = []
    for (var i = 0; i < walls.length; i++)
    {
      var test = intersect(this.x,this.y,this.x+cos(this.ang)*this.length,this.y+sin(this.ang)*this.length,walls[i].x1,walls[i].y1,walls[i].x2,walls[i].y2)
      
      
      if (test == false)
      {
        
      }else
      {
        //hit wall so add the point of intersection to an array
        hit.push(test);
      }
    
     
    }
    
    //find closest wall hit
    var closest;
    
    //try catch incase ray didnt hit anything
    try
    {
      closest = hit[0];
    }catch(a)
    {
      return;
    }
    
    for (var i = 0; i < hit.length; i++)
    {
      if (dist(hit[i][0],hit[i][1],this.x,this.y) < dist(closest[0],closest[1],this.x,this.y))
      {
        closest = hit[i];
      }
    }
    
    try{
    this.endCoord = [closest[0],closest[1]]
    }catch(a)
    {
      
    }
  }
  
  draw(debug)
  {
    if (this.endCoord.length > 0){
      line(this.x,this.y,this.endCoord[0],this.endCoord[1])
    }else{
      line(this.x,this.y,this.x+cos(this.ang)*this.length,this.y+sin(this.ang)*this.length)
    }
  }
}



//func for testing if 2 lines intersect
function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {

  // Check if none of the lines are of length 0
    if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
        return false
    }

    denominator = ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))

  // Lines are parallel
    if (denominator === 0) {
        return false
    }

    let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator
    let ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator

  // is the intersection along the segments
    if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
        return false
    }

  // Return a object with the x and y coordinates of the intersection
    let x = x1 + ua * (x2 - x1)
    let y = y1 + ua * (y2 - y1)
    
    return [x, y]
}