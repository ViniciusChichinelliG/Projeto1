function setup() {
  createCanvas(1000, 800);
  background('rgb(7,7,131)');
}

function draw() {
  
  fill('rgb(250,2,2)');
  stroke('white');
 if(mouseIsPressed)
  rect(mouseX,mouseY,30,50);
}
