const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");
const spanToggle = document.querySelector(".menu-toggle span#span1");
const spanToggle2 = document.querySelector(".menu-toggle span#span2");
const spanToggle3 = document.querySelector(".menu-toggle span#span3");
menuToggle.addEventListener("click", function () {
    nav.classList.toggle("slide");
});
$(document).scroll(function () {
    let body = document.querySelector("body").getBoundingClientRect();
    let widhtBody = body.width;
    var y = $(window).scrollTop();
    if (widhtBody < 1024) {
        if (y > 350) {
            $("nav.menu").addClass("shActive");
            $(".menu-toggle span").removeClass("bg-white");
        } else {
            $(".menu-toggle span#span1").addClass("bg-white");
            $(".menu-toggle span#span2").addClass("bg-white");
            $(".menu-toggle span#span3").addClass("bg-white");
            $("nav.menu").removeClass("shActive");
        }
    } else {
        if (y > 700) {
            $("nav.menu").addClass("shActive");
            $("nav ul li a").addClass("text-black-primary");
        } else {
            $("nav.menu").removeClass("shActive");
            $("nav ul li a").removeClass("text-black-primary");
        }
    }
});