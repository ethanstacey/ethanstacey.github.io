function setup() {
  createCanvas(1000, 1000);
  background(200);
  noStroke()
}

//settings
const scale = 4;
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
  //animation
  if (a < 2){
    a = a + 0.02
    b = b - 0.02
    c = c - 0.02
    d = d + 0.02
  } else {
    a = 1
    b = 0
    c = 1
    d = 0
  }

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
          fill(0,200,0)
          console.log("ERR out of bounds: " + fx + "," + fy)
        }
      }
      square(xstep*scale, ystep*scale, scale);
    }
    ystep=0;
  }
}
