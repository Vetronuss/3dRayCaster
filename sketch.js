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
  cam.draw();
  cam.update();
  for (var i = 0; i < walls.length; i++)
  {
    walls[i].update();
    walls[i].draw();
  }
}


