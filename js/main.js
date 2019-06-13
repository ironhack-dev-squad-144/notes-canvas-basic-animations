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

  for (let i = 0; i < rain.drops.length; i++) {
    if (checkCollision(player, rain.drops[i])) {
      player.getWet();
      rain.drops.splice(i, 1); // Remove the element at position i
    }
  }
}

// Return true when there is a collision between the player and the drop
function checkCollision(player, drop) {
  return (
    player.left() <= drop.x &&
    drop.x <= player.right() &&
    player.top() <= drop.y &&
    drop.y <= player.bottom()
  );
}

function animation(x) {
  updateEveryting();
  drawEveryting(ctx);
  requestAnimationFrame(animation);
}
animation();

// Check for keydown events
document.onkeydown = event => {
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
  player.direction = "";
};
