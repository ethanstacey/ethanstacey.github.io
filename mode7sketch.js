//settings
const scale = 1
const x1 = 768/2
const x2 = 768
const y1 = 0
const y2 = 768
const focalLength = 4
const speed = 0.2
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
var posX = 0 //staring x
var posY = 0 //starting y
var angle = -1 //starting angle

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
    posX = posX + Math.cos(angle+1.6) * speed
    posY = posY + Math.sin(angle+1.6) * speed
  }
  if (keyIsDown(65) === true) { //a
    angle = angle - 0.1
  }
  if (keyIsDown(83) === true) { //s
    posX = posX - Math.cos(angle+1.6) * speed
    posY = posY - Math.sin(angle+1.6) * speed
  }
  if (keyIsDown(68) === true) { //d
    angle = angle + 0.1
  }
  const sin = Math.sin(angle)
  const cos = Math.cos(angle)

  //engine
  for (let i=y1; i<y2; i++){
    for (let j=x1; j<x2; j++){
      const x = halfX2 - i
      const y = j + focalLength
      const z = j - halfY2 + 0.01

      //rotation
      const rx = (x * cos - y * sin)
      const ry = (x * sin + y * cos)

      //create perspective
      const px = Math.floor(rx / z + posX)
      const py = Math.floor(ry / z + posY)

      //check if px is in map array
      if (px >= 0 && px < mapXLength && py >= 0 && py < mapYLength ){
        set(i,j,100*map[px][py])
      } else { 
        set(i,j,200) //skybox color
      }
    }
  }
  updatePixels()
}