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

        document.getElementById("menu").classList.add("sticky");
    } else if (prevScrollpos > currentScrollPos && window.pageYOffset < 350){

        document.getElementById("menu").classList.remove("sticky");
    } else if (prevScrollpos < currentScrollPos && window.pageYOffset < 350){

        document.getElementById("menu").classList.remove("sticky");
        
    }else if (prevScrollpos < currentScrollPos && window.pageYOffset > 350){

        document.getElementById("menu").classList.add("sticky");;
    }
    prevScrollpos = currentScrollPos;
}

function openWeek() {
    if (document.getElementById("mySidebar").style.display == "block"){
      document.getElementById("mySidebar").style.display = "none";
    }else{
        document.getElementById("mySidebar").style.display = "block";
    }
}