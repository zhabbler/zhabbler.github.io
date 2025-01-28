$(document).ready(function(){
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
    $("h2,h3").each(function(){
        if($(this).prop("tagName") == 'H2' && !$(this).hasClass("JS_IGn")){
            $('#contain').append(`<li>
                    <a href="#${$(this).html().replace(/\s/g, '').toLowerCase()}-obj">
                        ${$(this).html()}
                    </a>
                </li><ul></ul>`);
        }
        if($(this).prop("tagName") == 'H3' && !$(this).hasClass("JS_IGn")){
            $('#contain ul:last-child').append(`<li>
                    <a href="#${$(this).html().replace(/\s/g, '').toLowerCase()}-func">
                        ${$(this).html()}
                    </a>
                </li>`);
        }
    });
});