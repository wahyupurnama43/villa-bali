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
             $("nav ul li a").addClass("text-black-primary");
            $(".menu-toggle span#span1").addClass("bg-dark");
            $(".menu-toggle span#span2").addClass("bg-dark");
            $(".menu-toggle span#span3").addClass("bg-dark");
        } else {
            $("nav.menu").removeClass("shActive");
             $("nav ul li a").removeClass("text-black-primary");
            $(".menu-toggle span#span1").removeClass("bg-dark");
            $(".menu-toggle span#span2").removeClass("bg-dark");
            $(".menu-toggle span#span3").removeClass("bg-dark");
        }
    } else {
        if (y > 700) {
            $("nav.menu").addClass("shActive");
            $("nav ul li a").addClass("text-black-primary");
            $(".menu-toggle span#span1").addClass("bg-dark");
            $(".menu-toggle span#span2").addClass("bg-dark");
            $(".menu-toggle span#span3").addClass("bg-dark");
        } else {
            $("nav.menu").removeClass("shActive");
            $("nav ul li a").removeClass("text-black-primary");
            $(".menu-toggle span#span1").removeClass("bg-dark");
            $(".menu-toggle span#span2").removeClass("bg-dark");
            $(".menu-toggle span#span3").removeClass("bg-dark");
        }
    }
});
