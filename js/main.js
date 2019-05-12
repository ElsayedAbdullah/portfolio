$(function () {

    // when click menu-btn it rotate to x
    $(".menu-btn").on("click", function () {
        $(this).toggleClass("close");
        $(".menu").toggleClass("show");
        $(".menu-branding").toggleClass("show");
        $(".menu-nav").toggleClass("show");
        $(".nav-item").toggleClass("show");
    });

});