const rSize = 2; //rectangle size
const aSize = 1000; //array size
currentArray = new Array(aSize).fill(0);
temp = new Array(aSize).fill(0);
var row = 0; //row counter
const pastels = ["#CC99C9", "#9EC1CF", "#9EE09E", "#FDFD97", "#FEB144", "#FF6663"]
const unicorn = ["#A11C66", "#D4501A", "#F5D002", "#4AA94A", "#016FA4", "#542F71"]


function onLoad(){ //mobile version
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {  
    var square = document.querySelector(".square");
    square.style.height = "70vh";
    square.style.width = "90vw";
    square.style.top = "15%";
    square.style.left = "5%";
    document.querySelector("p").style.fontSize = "24px";
    draw();

  }
}

function setup(){ //init
  randomRule();
  randomColor();
  randomRow();
  currentArray[aSize-1] = 1;
  createCanvas(2000, 1200);
  background(255);
  noStroke();
  //frameRate(120);
  cursor('cursor.png');
}

function mouseMoved(){ //runs whenever mouse is moved
  cursorTag = document.querySelector("div.cursor")
  cursorBox = cursorTag.querySelector('div')
  cursorBox.style.left = mouseX + "px";
  cursorBox.style.top = mouseY + "px";
}

function desc(text, size){ //show description of element
  console.log("describing")
  document.getElementById("hoverbox").innerHTML = text;
  cursorBox.style.height = size*20 + "px";
  cursorBox.style.opacity = "100%";
}

function removeDesc(){ //stop showing description of element
  cursorBox.style.opacity = "0%";
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
  color1 = unicorn[Math.floor(Math.random()*5)];
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
      fill(255);
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

function aboutPage(){ //show about page
  //dekstop
  document.getElementById("link1").innerHTML = "";
  document.getElementById("link2").innerHTML = "";
  document.getElementById("link3").innerHTML = "";
  document.getElementById("link4").innerHTML = "";
  document.getElementById("link5").innerHTML = "";
  document.getElementById("link6").innerHTML = "";
  document.getElementById("text1").innerHTML = "This website uses elementary cellular automota to randomly generate backgrounds. Each background is unique, and while similar rules and patterns will appear again, no two backgrounds will be exactly alike.";
  document.getElementById("link7").innerHTML = "\n Back";5
}

function homePage(){
  document.getElementById("link1").innerHTML = "Homemade 3D Engine";
  document.getElementById("link2").innerHTML = "Life Miner (Game)";
  document.getElementById("link3").innerHTML = "Github";
  document.getElementById("link4").innerHTML = "Glitch";
  document.getElementById("link5").innerHTML = "Resume/Contact";
  document.getElementById("link6").innerHTML = "About this Page";
  document.getElementById("text1").innerHTML = "";
  document.getElementById("link7").innerHTML = "";
}