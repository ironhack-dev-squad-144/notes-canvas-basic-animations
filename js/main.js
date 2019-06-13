let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

let frame = 0; // Frame counter

let rain = new Rain();
let player = new Character(width / 2);

function drawEveryting(ctx) {
  ctx.clearRect(0, 0, width, height); // Clear everything on the canvas
  rain.draw(ctx);
  player.draw(ctx);
}

function updateEveryting() {
  frame++;
  rain.update();
  player.update();
}

function animation(x) {
  updateEveryting();
  drawEveryting(ctx);
  requestAnimationFrame(animation);
}
animation();

// Check for keydown events
document.onkeydown = event => {
  console.log(event.keyCode);
  switch (event.keyCode) {
    // Left
    case 37:
      player.direction = "left";
      break;
    // Right
    case 39:
      player.direction = "right";
      break;
  }
};
document.onkeyup = event => {
  console.log(event.keyCode);
  player.direction = "";
};