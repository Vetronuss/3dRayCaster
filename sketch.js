var cam
var walls = []
var wallAmount = 10
function setup() {
  createCanvas(windowWidth,windowHeight);
  cam = new Camera(width/2,height/2,TWO_PI*0.75)
  //create walls
  for (var i = 0; i < wallAmount; i++)
  {
    walls.push(new Wall());
  }
}

function draw() {
  background(0);
  

  cam.draw3d();
  cam.update();
  miniMap(200);
}

function miniMap(size)
{
  push();
  stroke(0)
  fill(100)
  rect(1,1,size,size)
  for (var i = 0; i < walls.length; i++)
  {
    
    
    walls[i].draw(size);
  }
  
  circle(map(cam.x,0,width,0,size),map(cam.y,0,height,0,size),10)
  stroke('red')
  line(map(cam.x,0,width,0,size),map(cam.y,0,height,0,size),map(cam.x,0,width,0,size)+cos(cam.ang)*10,map(cam.y,0,height,0,size)+sin(cam.ang)*10)
  pop();
}


