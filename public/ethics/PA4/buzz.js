var fizz = 3;
var buzz = 5;
var intervalId = -1;
var val = 1;

function setup() {
  document.getElementById("settings").addEventListener("submit", (e) => {e.preventDefault(); saveSettings()});
  document.getElementById("reset").addEventListener("click", () => reset())
  document.getElementById("fb").addEventListener("click", () => start(), {once:true});
  this.canvas = document.getElementById("fb");
  this.canvas.width = 1000;
  this.canvas.height = 500;
  write("Click to start")
}

function start() {
  intervalId = setInterval(run, 333)
}

function run() {
  let string = val;
  if (val % fizz == 0) {
    if (val % buzz == 0) {
      string = "FizzBuzz";
    } else {
      string = "Fizz";
    }
  } else if (val % buzz == 0) {
    string = "Buzz"
  }
  val++;
  write(string);
}

function reset() {
  clearInterval(intervalId)
  document.getElementById("fb").addEventListener("click", () => start(), {once:true});
  val = 1;
  write("Click to start")
}

function write(text) {
  context = document.getElementById("fb").getContext("2d");
  context.clearRect(0, 0, 1000, 500);
  context.font = "300px serif";
  context.textAlign = "center";
  context.fillText(text, 500, 325, 980);
}

function saveSettings() {
  fizz = parseInt(document.getElementById("fizz").value)
  buzz = parseInt(document.getElementById("buzz").value)
}

window.addEventListener("load", () => setup())
