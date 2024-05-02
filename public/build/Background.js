"use strict";
class Background {
    constructor(backgroundId, numBubbles, colors) {
        this.numBubbles = numBubbles;
        this.canvas = document.getElementById(backgroundId);
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext("2d");
        this.bubbles = new Array(numBubbles);
        this.colors = colors;
        this.animationFrameId = -1;
        let colorCount = this.colors.length;
        for (var i = 0; i < numBubbles; i++) {
            let color = this.colors[Math.floor(Math.random() * colorCount)];
            let radius = 10 + (Math.random() * 50);
            let xPos = radius + Math.random() * (this.canvas.width - (2 * radius));
            let yPos = radius + Math.random() * (this.canvas.height - (2 * radius));
            this.bubbles[i] = new Bubble(color, radius, xPos, yPos);
        }
    }
    animateFrame() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (var i = 0; i < this.numBubbles; i++) {
            this.bubbles[i].update(this.canvas.width, this.canvas.height, this.context);
        }
        this.animationFrameId = window.requestAnimationFrame(() => this.animateFrame());
    }
    animate() {
        this.context.globalAlpha = 0.5;
        console.log(typeof (this.context));
        if (!isMobile()) {
            window.requestAnimationFrame(() => this.animateFrame());
        }
    }
    resize(newWidth, newHeight) {
        if (this.animationFrameId != -1) {
            window.cancelAnimationFrame(this.animationFrameId);
        }
        // If the window got larger, move a few bubbles into the empty space
        if (this.canvas.width < newWidth || this.canvas.height < newHeight) {
            for (var i = 0; i < this.numBubbles; i++) {
                if (Math.random() < 0.5) {
                    this.bubbles[i].randomMove(newWidth, newHeight);
                }
            }
        }
        // Update the size
        this.canvas.width = newWidth;
        this.canvas.height = newHeight;
        // Resume animation
        this.animate();
    }
}
