$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $("#search").addClass("top-0");
            $("#search").removeClass("top-12");
        } else if (scroll <= 50) {
            $("#search").removeClass("top-0");
            $("#search").addClass("top-12");
        }
    });
    $("#btn-sort").click(function(e) {
        e.preventDefault();
        $("#list-sort").toggleClass("hidden");
    });
    $(".menu-dropdown").click(function(e) {
        e.preventDefault();
        $(".menu-item").toggle();
    });
    $("#nav-menu").click(function(e) {
        e.preventDefault();
        $("#nav-sm").removeClass("hidden");
    });
    $("#nav-close").click(function(e) {
        e.preventDefault();
        $("#nav-sm").addClass("hidden");
    });
});