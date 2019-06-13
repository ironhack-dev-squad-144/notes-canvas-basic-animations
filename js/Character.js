class Character {
  constructor(initialX) {
    this.width = 50
    this.height = 100
    this.x = initialX
    this.y = height - this.height
  }
  draw(ctx) {
    if (this.wetTtl) {
      ctx.fillStyle = "blue"
    }
    else {
      ctx.fillStyle = "black"
    }
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  update() {
    if (this.direction === 'left') this.x -= 5
    if (this.direction === 'right') this.x += 5
    if (this.wetTtl > 0) this.wetTtl--
  }
  top() {
    return this.y
  }
  bottom() {
    return this.y + this.height
  }
  left() {
    return this.x
  }
  right() {
    return this.x + this.width
  }
  getWet() {
    // ttl = time to live
    this.wetTtl = 10
  }
}