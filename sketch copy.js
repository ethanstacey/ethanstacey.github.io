const rSize = 3; //rectangle size
const aSize = 800; //array size
currentArray = new Array(aSize).fill(0);
temp = new Array(aSize).fill(0);
var row = 0; //row counter
const pastels = ["#CC99C9", "#9EC1CF", "#9EE09E", "#FDFD97", "#FEB144", "#FF6663"]
const unicorn = ["#A11C66", "#D4501A", "#F5D002", "#4AA94A", "#016FA4", "#542F71"]
var onMobile = false;
var invertx = 0;
var inverty = 0;

function preload(){ //load before website renders
  song = loadSound('site-010.mp3');
  hoverSound = loadSound('websitesound.mp3')
}

function setup(){ //init
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {  
    onMobile = true;
  }
  randomRule();
  randomColor();
  randomRow();
  currentArray[aSize-1] = 1;
  if (onMobile){
    createCanvas(400, 800);
  } else {
    createCanvas(2400, 1200);
  }
  background(255);
  noStroke();
  cursor('cursor.png');
  song.play();
}

function mouseMoved(){ //runs whenever mouse is moved
  cursorTag = document.querySelector("div.cursor")
  cursorBox = cursorTag.querySelector('div')
  cursorBox.style.left = mouseX - invertx + 12 + "px";
  cursorBox.style.top = mouseY - inverty + 12 + "px";
}

function desc(text, size, reverse){ //show description of element
  if (onMobile == false){
    if (reverse == true){
      invertx = 250;
      inverty = 115;
    }
    else{
      invertx = 0;
      inverty = 0;
    }
    document.getElementById("hoverbox").innerHTML = text;
    cursorBox.style.opacity = "100%";
  }
  hoverSound.play()
}

function removeDesc(){ //stop showing description of element
  cursorBox.style.opacity = "0%";
}

function left(){
  const imageElement = document.getElementById("left");
  imageElement.src = "./assets/left_hover.png";
  desc("Previous Pedal", 3)
}

function leftOut(){
  const imageElement = document.getElementById("left");
  imageElement.src = "./assets/left.png";
  removeDesc()
}

function right(){
  const imageElement = document.getElementById("right");
  imageElement.src = "./assets/right_hover.png";
  desc("Next Pedal", 3)
}

function rightOut(){
  const imageElement = document.getElementById("right");
  imageElement.src = "./assets/right.png";
  removeDesc()
}

function randomRule(){ //make random ruleset
  rule1 = Math.floor(Math.random()*2);
  rule2 = Math.floor(Math.random()*2);
  rule3 = Math.floor(Math.random()*2);
  rule4 = Math.floor(Math.random()*2);
  rule5 = Math.floor(Math.random()*2);
  rule6 = Math.floor(Math.random()*2);
  rule7 = Math.floor(Math.random()*2);
  rule8 = Math.floor(Math.random()*2);
}

function randomColor(){
  color1 = pastels[Math.floor(Math.random()*6)];
  color2 = pastels[Math.floor(Math.random()*6)];
  //document.getElementById("title").style.color = color1;
}

function randomRow(){ //make random starting row
  for (var j=0; j<aSize; j++){
    currentArray[j] = floor(random(2));
  }
}

function draw(){ //draw pattern on the screen
  row++;
  for (var i = 0; i < aSize; i++){
    if (currentArray[i] == 1){ 
      fill(color1);
    } else {
      fill(color2);
    }
    rect(rSize*i,rSize*row,rSize,rSize);
  }
  cells();
  if (row == 600){
    newBackground();
  }
}

function ruleset(l,c,r){ //function for changing the rule
  if (l == 1 && c == 1 && r == 1){ //rule 7 (111)
    return rule1;
  }
  if (l == 1 && c == 1 && r == 0){ //rule 6 (110)
    return rule2;
  }
  if (l == 1 && c == 0 && r == 1){ //rule 5 (101)
    return rule3;
  }
  if (l == 1 && c == 0 && r == 0){ //rule 4 (100)
    return rule4;
  }
  if (l == 0 && c == 1 && r == 1){ //rule 3 (011)
    return rule5;
  }
  if (l == 0 && c == 1 && r == 0){ //rule 2 (010)
    return rule6;
  }
  if (l == 0 && c == 0 && r == 1){ //rule 1 (001)
    return rule7;
  }
  if (l == 0 && c == 0 && r == 0){ //rule 0 (000)
    return rule8;
  }
  return 0;
}

function cells(){ //calculate cells
  for (var k = 0; k < aSize; k++){
    if (k == 0){
      temp[k] = ruleset(0, currentArray[k], currentArray[k+1]);
    } else if (k == aSize-1){
      temp[k] = ruleset(currentArray[k-1], currentArray[k], 0);
    } else {
    temp[k] = ruleset(currentArray[k-1], currentArray[k], currentArray[k+1]);
    }
  }
  currentArray = temp.slice();
}

function newBackground(){ //start generation over
  randomRule();
  randomColor();
  randomRow();
  row = 0;
}