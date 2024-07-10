function setup() {
  createCanvas(780, 780);
  background(200);
  noStroke()
}

//settings
const scale = 6;
const resolution = 16;
const x1 = 0 * resolution;
const x2 = 8 * resolution;
const y1 = 0 * resolution;
const y2 = 8 * resolution;
var a = 1;
var b = 0;
var c = 1;
var d = 0;
const map = [
  [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
  [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
  [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
  [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
  [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
  [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
  [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
  [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
  [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
  [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
  [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
  [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
  [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
  [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
  [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
  [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
]

function draw() {

  //user input
  if (keyIsDown(87) === true) { //w
    a = a + 0.02
  }
  if (keyIsDown(65) === true) { //a
    b = b + 0.02
  }
  if (keyIsDown(83) === true) { //s
    a = a - 0.02
  }
  if (keyIsDown(68) === true) { //d
    b = b - 0.02
  }

  /*
  //animation
  if (a < 2){
    a = a + 0.01
    b = b - 0.01
    c = c - 0.01
    d = d + 0.01
  } else {
    a = 1
    b = 0
    c = 1
    d = 0
  }
  */

  //engine
  var xstep = 0;
  var ystep = 0;
  for (let y=y1; y<y2; y++){
    xstep++;
    for (let x=x1; x<x2; x++){
      ystep++;
      const fx = Math.floor(x/resolution*a + y/resolution*b)
      const fy = Math.floor(y/resolution*c + x/resolution*d)
      if (fx < 64 && fx >= 0){
        try{
          fill(0, 100+map[fx][fy]*100, 0);
        } catch {
          fill(100,100,255)
          console.log("ERR out of bounds: " + fx + "," + fy)
        }
      }
      else { 
        fill(100,100,255)
      }
      square(xstep*scale, ystep*scale, scale);
    }
    ystep=0;
  }
}