document.addEventListener("DOMContentLoaded", function() {
  function mobileViewUpdate() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 600) {
      $('.navbar.fixed-top').addClass('scrolled');
      $('.navbar-brand').addClass('scrolled');
    } else {
      $(document).scroll(function() {
        var $nav = $(".navbar.fixed-top");
        var $brand = $(".navbar-brand");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $brand.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
    }
  }
  
  $(window).on("load", mobileViewUpdate);
  $(window).on("resize", mobileViewUpdate);

  mobileViewUpdate();
});