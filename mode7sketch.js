//settings
const scale = 1
const x1 = 0
const x2 = 768
const y1 = 0
const y2 = 768
const focalLength = 4
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
var posX = 0
var posY = 0

//do not touch
const halfX2 = x2/2
const halfY2 = y2/2
const mapXLength = map.length
const mapYLength = map[0].length

function setup() {
  var cnv = createCanvas(x2*scale, y2*scale);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(200);
  noStroke()
}

function draw() {
  //user input
  if (keyIsDown(87) === true) { //w
    posX = posX + 0.3
    posY = posY + 0.3
  }
  if (keyIsDown(65) === true) { //a
    posX = posX + 0.3
    posY = posY - 0.3
  }
  if (keyIsDown(83) === true) { //s
    posX = posX - 0.3
    posY = posY - 0.3
  }
  if (keyIsDown(68) === true) { //d
    posX = posX - 0.3
    posY = posY + 0.3
  }

  //engine
  for (let y=y1; y<y2; y++){
    for (let x=x1; x<x2; x++){

      //don't render top half of screen
      if (x>halfX2){ 

        //create perspective
        const z = x-halfY2+0.01
        const px = Math.floor((x2-y) / z + posX)
        const py = Math.floor((y+focalLength) / z + posY)

        //check if px is in map array
        if (px >= 0 && px < mapXLength && py >= 0 && py < mapYLength ){
          set(y,x,100*map[px][py])
        }
        else { 
          set(y,x,200) //skybox color
        }
      }
    }
  }
  updatePixels()
}