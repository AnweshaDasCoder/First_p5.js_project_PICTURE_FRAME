function preload() {

}
  
  function setup(){
    createCanvas(windowWidth, windowHeight);
    video=createCapture(VIDEO);
    video.hide();
}

function draw() {
  image(video,200,200,500,400);
  fill(0, 0, 255);
  circle(150, 200, 50);
  circle(150, 250, 50);
  circle(150, 300, 50);
  circle(150, 350, 50);
  circle(150, 400, 50);
  circle(150, 450, 50);
  circle(150, 500, 50);
  circle(150, 550, 50);
  circle(150, 600, 50);
  circle(200, 600, 50);
  circle(250, 600, 50);
  circle(300, 600, 50);
  circle(350, 600, 50);
  circle(400, 600, 50);
  circle(450, 600, 50);
  circle(500, 600, 50);
  circle(550, 600, 50);
  circle(600, 600, 50);
  circle(650, 600, 50);
  circle(700, 600, 50);
  circle(750, 600, 50);
  circle(750, 600, 50);
  circle(750, 550, 50);
  circle(750, 500, 50);
  circle(750, 450, 50);
  circle(750, 400, 50);
  circle(750, 350, 50);
  circle(750, 300, 50);
  circle(750, 250, 50);
  circle(750, 200, 50);
  circle(200, 200, 50);
  circle(250, 200, 50);
  circle(300, 200, 50);
  circle(350, 200, 50);
  circle(400, 200, 50);
  circle(450, 200, 50);
  circle(500, 200, 50);
  circle(550, 200, 50);
  circle(600, 200, 50);
  circle(650, 200, 50);
  circle(700, 200, 50);
}

function take_snapshot() {
    save('student_name.png');
}