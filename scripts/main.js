function setWidth(id, width) {
  document.getElementById(id).style.width = width + "px";
}

function getWidth(id) {
  return document.getElementById(id).offsetWidth;
}

function incrementWidth(id) {
  setWidth(id, getWidth(id) + 2);
}

function openNavigationPane() {
  var timer;
  clearInterval(timer);
  anitmateNavigationPane();
  timer = setInterval(anitmateNavigationPane, 5);
  function anitmateNavigationPane() {
    var targetWidth = Math.ceil(window.innerWidth * 0.15);
    if (getWidth("navigation_pane") >= targetWidth) {
      document.getElementById("navigation_pane").style.width = "15%";
      clearInterval(timer);
    } else {
      incrementWidth("navigation_pane");
    }
  }
}
