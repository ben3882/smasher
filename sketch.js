

let moles = []; // array of Jitter objects
let numClicked = 0;
let moleShow = true;
//let show = true;
let d=2000;
let i = 0;
let width = 400;
let height = 600;
let glass;
let tree;

function setup() {
  
  createCanvas(width, height);
  
  //glass = createAudio('smashing-glass-6166.mp3');
  //console.log(glass.src); 
  // Create objects
  for (let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      moles.push(new Jitter(width/4 + j*width/4, height/4 + i*height/4));
    }
    
  }
  
  setInterval(myTimer, d);
    function myTimer() {
      
      
      //for(let i = 0; i < moles.length; i++) {
      moles[i].moleShow = true;
      i++;
      if(i >= moles.length) i = 0;

      }
      /*for(let i = 0; i < moles.length; i++) {
        if(moles[i].moleShow) {
         moles[i].moleShow= false;

      } else moles[i].moleShow = true;
        
        
      //console.log(moles[i].moleShow);
      }*/
      
    //}
    
}

function draw() {
  background(50, 89, 100);
  image(tree, 0, 0, 400, 500);
  //rect(25,25,25,25);
  for (let i = 0; i < moles.length; i++) {
    moles[i].move();
    
    moles[i].mouseOver();
    if(moles[i].moleShow){
      moles[i].display();
    }
  }
  fill("white");
  textSize(20);
  text(numClicked, width/5 + 3*width/5, 50);
}

// Jitter class
class Jitter {
  constructor(x, y) {
    this.x = x; //random(width);
    this.y = y; //random(height);
    this.diameter = random(20, 30);
    this.speed = 1;
    this.moleShow = true;

  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    //fill("blue");
    ellipse(this.x, this.y, this.diameter, this.diameter);   
  }
  
  mouseOver() {    
    if(abs(mouseX - this.x) <= this.diameter/2 && 
      abs(mouseY - this.y) <= this.diameter/2 ) {
          fill("red");
          //this.moleShow = false;
          
          
               
      } else {
        fill("blue"); 
       
    }    
  }
  selector() {
    if(abs(mouseX - this.x) <= this.diameter/2 && 
      abs(mouseY - this.y) <= this.diameter/2 ) {
          //fill("red");
          this.moleShow = false;
      numClicked++;
      glass.play();
    }
  }  
}

function mousePressed () {
  
  console.log("I was clicked"); 
  for(let i = 0; i < moles.length; i++) {
    moles[i].selector();    
  }
  
  //console.log(glass.src);
  return false;

}



function preload() {
  soundFormats('mp3', 'ogg');
  glass = loadSound('smashing-glass-6166.mp3');
  tree = loadImage('xmas_tree.png');
}


/*function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.play();
}*/
