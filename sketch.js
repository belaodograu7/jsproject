function setup() {
    createCanvas(540, 350);
    background ('rgb(216,122,218)')
  }
  
  function draw() {
    
    stroke ('rgb(80,59,63)')
    fill ('rgb(7,7,7)')    
    
    // console.log(mouseIsPressed)
    
      if(mouseIsPressed) {
        rect (mouseX,mouseY ,35,30)
        } 
  }
    