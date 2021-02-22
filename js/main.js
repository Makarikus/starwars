$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    margin: 5,
    nav: true,
    navClass: ["slider__nav--left", "slider__nav--right"],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      800: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });
});