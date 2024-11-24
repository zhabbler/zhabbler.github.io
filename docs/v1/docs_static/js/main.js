var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar_top").style.top = "0";
    } else {
        document.querySelector(".navbar_top").style.top = "-55px";
    }
    prevScrollpos = currentScrollPos;
    }