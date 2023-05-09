$(function () {


  // $('.multiple-items').slick({
  //     infinite: true,
  //     slidesToShow: 5,
  //     slidesToScroll: 5
  //   });



  $('.multiple-items').bxSlider({
    slideWidth: 800,
    minSlides: 5,
    maxSlides: 5,
    slideMargin: 10
  });


  $('.bxslider').bxSlider({
    minSlides: 6,
    maxSlides: 6,
    slideWidth: 1600,
    slideMargin: 10,
    ticker: true,
    speed: 50000
  });



  $('.menu-toggle-btn').click(function () {
    $('.menu-toggle-btn').toggleClass("effect");
    $('.menu-list').toggleClass("effect");
  });


  var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,



  });










  var $menu = $(".subNavBtn"),
    $contents = $(".scroll"),
    $doc = $("html, body");




  $menu.on("click", "a", function () {

    var $target = $(this).parent(),

      idx = $target.index(),
      section = $contents.eq(idx),
      offsetTop = section.offset().top;

    $doc.animate({
      scrollTop: offsetTop
    }, 1000);

  });





});