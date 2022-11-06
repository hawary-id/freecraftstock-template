$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $("#search").addClass("top-0 bg-gray-50");
      $("#search").removeClass("top-12");
      $("#recomended").addClass("top-14");
      $("#recomended").removeClass("top-26");
    } else if (scroll <= 50) {
      $("#search").removeClass("top-0 bg-gray-50");
      $("#search").addClass("top-12");
      $("#recomended").removeClass("top-14");
      $("#recomended").addClass("top-26");
    }
  });
  $("#btn-sort").click(function (e) {
    e.preventDefault();
    $("#list-sort").toggleClass("hidden");
  });
  $(".menu-dropdown").click(function (e) {
    e.preventDefault();
    $(".menu-item").toggle();
  });
});
