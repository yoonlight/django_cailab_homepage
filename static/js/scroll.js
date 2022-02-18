let h = document.querySelector("header");
let hMenu = document.querySelector("menu-box");

const headHeight = 5.4;
const menuHeight = 80;

function onScroll() {
    window.addEventListener("scroll", callbackFunc);
    function callbackFunc() {
      var y = window.pageYOffset;
      if (y > 150) {
        h.classList.add("scroll");
        hMenu.classList.add("scroll");
        h.style.height = (headHeight - 1) + "rem";
        h.style.transition = .2 + "s";
        hMenu.height = (menuHeight + 10) + "px"; 
        hMenu.style.transition = .2 + "s";
      } else {
        h.classList.remove("scroll");
        hMenu.remove("scroll");
        h.style.height = headHeight + "rem";
        h.style.transition = .2 + "s";
        hMenu.height = (menuHeight) + "px"; 
        hMenu.style.transition = .2 + "s";
      }
    }
  }

  window.onload = onScroll();