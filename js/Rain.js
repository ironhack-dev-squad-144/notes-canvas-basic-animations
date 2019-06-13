class Rain {
  constructor() {
    this.drops = [{ x: 300, y: -20 }, { x: 400, y: -20 }];
    this.dropHeight = 20
  }
  draw(ctx) {
    ctx.lineWidth = 5
    ctx.strokeStyle = "blue"
    for (let i = 0; i < this.drops.length; i++) {
      ctx.beginPath();
      ctx.moveTo(this.drops[i].x, this.drops[i].y);
      ctx.lineTo(this.drops[i].x, this.drops[i].y - this.dropHeight);
      ctx.stroke();
    }
  }
  // Update the rain for the next frame
  update() {
    // Update each drop
    for (let i = 0; i < this.drops.length; i++) {
      this.drops[i].x += Math.random() // Some little random wind to the right
      this.drops[i].y += 5
    }

    // Add a drop every 3 frames
    if (frame % 10 === 0) {
      this.drops.push({ 
        x: (width+100) * Math.random() - 100, 
        y: -20
      })
    }

    // Remove the 1st drops if it's useless
    if (this.drops[0].y-this.dropHeight > height) {
      this.drops.shift()
    }
  }
}
