var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

window.addEventListener("resize", function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innterHeight;
});

function Bubble() {
  this.radius = 15 + Math.floor(Math.random() * 45);
  let colors = ["#EC994B", "#F1EEE9"];
  this.color = colors[Math.floor(Math.random() * 2)];
  this.xspeed = Math.random() - 0.5;
  this.yspeed = Math.random() - 0.5;
  this.xpos = Math.random() * (canvas.width - this.radius) + 5;
  this.ypos = Math.random() * (canvas.height - this.radius) + 5;

  this.render = function() {
    ctx.globalAlpha = opacity / 1000;
    ctx.beginPath();
    ctx.arc(this.xpos, this.ypos, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  this.update = function() {
    this.xpos += this.xspeed;
    if (this.xpos + this.radius >= canvas.width) { //too far right
      this.xpos = canvas.width - this.radius - 1;
      this.xspeed *= -1;
    } else if (this.xpos - this.radius <= 0) { //too far left
      this.xpos = this.radius + 1;
      this.xspeed *= -1;
    }
    this.ypos += this.yspeed;
    if (this.ypos - this.radius <= 0) { //too far up
      this.ypos = this.radius + 1;
      this.yspeed *= -1;
    } else if (this.ypos + this.radius >= canvas.height) { //to far down
      this.ypos = canvas.height - this.radius - 1;
      this.yspeed *= -1;
    }

    this.render();
  }
}

var bubbleArray = [];
var numBubbles = 100;
var opacity = 6;
var change = 1;
for (var i = 0; i < numBubbles; i++) {
  bubbleArray.push(new Bubble());
}

function animate() {
  window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  opacity += change;
  if (opacity > 1000 || opacity < 5) {
    change *= -1;
  }
  for (var i = 0; i < numBubbles; i++) {
    bubbleArray[i].update();
  }
}
animate();
