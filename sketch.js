var song;
var p = 0;
var golden = 1.61803398875

function setup() {
    
  var canvas = createCanvas(windowWidth,500);
  drawingContext.shadowOffsetX = 1;
  drawingContext.shadowOffsetY = -1;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "white";

  canvas.parent("p5jsContainer");
  colorMode(HSB)
  frameRate(30)
 
}

function flower(N, turn,p) {
  
 for(i = 0; i < N ; i++) {
   
   k = turn*i
   radius = k*0.625  
   
   x = radius * cos(2*PI*k + p)
   y = radius * sin(2*PI*k + p)
   
   h = map(i,0,320,5,100);
   fill(h,200,100,1);
   
   circle(windowWidth/2+x,250+y,1.9*sqrt(k))
 }
}

function draw() {
  background(0);
  
  turn = map(frameCount,0,200,1.6,golden, true)
  if (turn >= golden) {
    p+=0.001
  }
  stroke(0,0,10)
  fill(255,255,0)
  circle(windowWidth/2,250,640)
  flower(300,turn,p);
  textSize(map(turn,1.6,golden,32,55))

  text(nf(turn,1,5),20,480)
}
