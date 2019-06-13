class Character {
  constructor(initialX) {
    this.width = 50
    this.height = 100
    this.x = initialX
    this.y = height - this.height
  }
  draw(ctx) {
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  update() {
    if (this.direction === 'left') this.x -= 5
    if (this.direction === 'right') this.x += 5
  }
}