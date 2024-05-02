"use strict";
class Bubble {
    constructor(color, radius, x, y) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.xSpeed = Math.random() - 0.5;
        this.ySpeed = Math.random() - 0.5;
    }
    randomMove(maxX, maxY) {
        this.x = this.radius + Math.random() * (maxX - (2 * this.radius));
        this.y = this.radius + Math.random() * (maxY - (2 * this.radius));
    }
    render(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = this.color;
        context.fill();
    }
    update(maxX, maxY, context) {
        this.x += this.xSpeed;
        if (this.x + this.radius >= maxX) { // too far right
            this.x = maxX - this.radius - 1;
            this.xSpeed *= -1;
        }
        else if (this.x - this.radius <= 0) { // too far left
            this.x = this.radius + 1;
            this.xSpeed *= -1;
        }
        this.y += this.ySpeed;
        if (this.y - this.radius <= 0) { // too far up
            this.y = this.radius + 1;
            this.ySpeed *= -1;
        }
        else if (this.y + this.radius >= maxY) { // too far down
            this.y = maxY - this.radius - 1;
            this.ySpeed *= -1;
        }
        this.render(context);
    }
}
