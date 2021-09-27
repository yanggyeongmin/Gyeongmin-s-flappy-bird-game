var bird;
var bird2;
var pipes = [];


function setup() {
  createCanvas(640, 480);
  bird = new Bird(64);
  bird2 = new Bird(34)
  pipes.push(new Pipe());
}


function draw() {
  background(100);


  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();


    if (pipes[i].hits(bird)) {
      console.log('HIT');
    }


    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }


  bird.update();
  bird.show();
  bird2.update();
  bird2.show();

  
  if (frameCount % 75 == 0) {
    pipes.push(new Pipe());
  }
}


function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }if (key == 'w') { 
    bird2.up() }
}
