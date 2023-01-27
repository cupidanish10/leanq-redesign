

$(document).ready(function () {
  
 console.log("working")

  $(document.body).attr("title", $("head title").html());

  
  $(".hamburger-icon").on("click", function (e) {
    $(".mobile-menu").toggleClass("toggle-nav"); //you can list several class names
    $(".top-nav").toggleClass("d-none");
    e.preventDefault();
  });

  $(".navbar-close").on("click", function (e) {
    $(".mobile-menu").toggleClass("toggle-nav"); //you can list several class names
    $(".top-nav").removeClass("d-none");
    $(".top-nav").addClass("d-flex");
    e.preventDefault();
  });

  
});

