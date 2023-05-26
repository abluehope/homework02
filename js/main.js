$(function () {
  $(window).on("scroll", function () {
    let sct = $(window).scrollTop();
    if (sct > 0) {
      $(".header, .to_top").addClass("on");
    } else {
      $(".header, .to_top").removeClass("on");
    }
  });

  $(".main_slide").slick({
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  $(".main_slide").on("init afterChange", function (e, s, c) {
    let _this = $(this).find(".slick-current");

    _this.addClass("on").siblings().removeClass("on");
    $(".main_visual .num").text(c ? c + 1 : 1);
  });

  $(".product_slide").slick({
    speed: 700,
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".product .arrows .left").on("click", function () {
    $(".product_slide").slick("slickPrev");
  });
  $(".product .arrows .right").on("click", function () {
    $(".product_slide").slick("slickNext");
  });

  $(".to_top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});
