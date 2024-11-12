let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = 0, y = 0, speed = 4;
const width = 20, height = 20;

init()

function init(){
  window.requestAnimationFrame(draw);
}

function draw(timestamp){
  console.log(timestamp);
  if(x < 0 || x > canvas.width - width){
    speed *= -1;
  }
  x += speed;
  ctx.clearRect(0, 0, canvas.width, canvas.height); //Limpiar el canvas
  ctx.fillRect(x, y, width, height);
  window.requestAnimationFrame(draw);
}
