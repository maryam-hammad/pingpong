canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

background_image = "Screenshot 2024-06-25 212515.png";

ball_x = 960;
ball_y = 540;
ball_width = 20;
ball_height = 20;

racket_x = 100;
racket_y = 900;
racket_width = 50;
racket_height = 80;

ball_image = "ping_pong_PNG10383.png";

racket_image = "ping_pong_racket.jpeg";

function add(){
    background = new Image();
    background.onload = upload_background;
    background.src = background_image;
 
    ball = new Image();
    ball.onload = upload_ball();
    ball.src = ball_image;

    racket = new Image();
    racket.onload = upload_racket;
    racket.src = racket_image;
 }

 function upload_background(){
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  }
  
  function upload_racket(){
    ctx.drawImage(racket, racket_x, racket_y, racket_width, racket_height);
  }

  function upload_ball(){
    ctx.drawImage(ball, ball_x, ball_y, ball_width, ball_height);
  }
  

 window.addEventListener("keydown", my_keydown);
function my_keydown(e){
  keyPressed = e.keyCode;
  console.log(keyPressed);
  if (keyPressed == "38"){
   up();
   console.log("Up");

  }

  if (keyPressed == "40"){
    down();
    console.log("Down");
  }

  if (keyPressed == "37"){
    left();
    console.log("Left");

  }

  if (keyPressed == "39"){
      right();
      console.log("Right");

  }
  

}

function up(){
 if (rover_y >= 0){
  rover_y = rover_y - 10;
  console.log("Up arrow is pressed x =" + rover_x + "y =" + rover_y);
  upload_background();
  upload_racket();
 }
}

function down(){
  if (rover_y <= 500){
    rover_y = rover_y + 10;
    console.log("Down arrow is pressed, x =" + rover_x + "y =" + rover_y);
    upload_background();
    upload_racket();
  }

}

function left(){
  if (rover_x >= 0){
    rover_x = rover_x - 10;
    console.log("Left arrow is pressed, x = " + rover_x + "y = " + rover_y);
    upload_background();
    upload_racket();
  }

}

function right(){
  if (rover_x <= 500){
    rover_x = rover_x + 10;
    console.log("Right arrow is pressed, x =" + rover_x + "y =" + rover_y);
    upload_background();
    upload_racket();
  }
}