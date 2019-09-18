(function () {
  "use strict";
  $(function () {
    $(".menu-container").load("menu.html");
  });
})();

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos && window.pageYOffset > 350) {
        document.getElementById("menu").style.top = "0";
        document.getElementById("menu").classList.add("sticky");
    } else if (prevScrollpos > currentScrollPos && window.pageYOffset < 350){
        document.getElementById("menu").style.top = "0";
        document.getElementById("menu").classList.remove("sticky");
    } else if (prevScrollpos < currentScrollPos && window.pageYOffset < 350){
        document.getElementById("menu").style.top = "0px";
        document.getElementById("menu").classList.remove("sticky");
        
    }else if (prevScrollpos < currentScrollPos && window.pageYOffset > 350){
        document.getElementById("menu").style.top = "0px";
        document.getElementById("menu").classList.add("sticky");
    }
    prevScrollpos = currentScrollPos;
}

function esconde() {
  var x = document.getElementById("EAPerú");
  var y = document.getElementById("EAPerúHide");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.src = "img/down.png";
  } else {
    x.style.display = "none";
    y.src = "img/up.png";
  }
}

function escondeCol() {
  var x = document.getElementById("EACol");
  var y = document.getElementById("EAColHide");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.src = "img/down.png";
  } else {
    x.style.display = "none";
    y.src = "img/up.png";
  }
}

function escondeEEUU() {
  var x = document.getElementById("EAEEUU");
  var y = document.getElementById("EAEEUUHide");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.src = "img/down.png";
  } else {
    x.style.display = "none";
    y.src = "img/up.png";
  }
}
function escondeUK() {
  var x = document.getElementById("EAUK");
  var y = document.getElementById("EAUKHide");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.src = "img/down.png";
  } else {
    x.style.display = "none";
    y.src = "img/up.png";
  }
}
