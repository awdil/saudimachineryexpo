jQuery(window).scroll(function () {
  jQuery(window).scrollTop() > 200
    ? jQuery(".top_outer").addClass("fixed")
    : jQuery(".top_outer").removeClass("fixed");
}),
  jQuery(".portfolio-popup-inner p").click(function () {
    jQuery(".fixed-popup").addClass("open"),
      jQuery("body").addClass("open-body-portfolio");
  }),
  jQuery(".port-folio-close a").on("click", function () {
    jQuery(".fixed-popup").removeClass("open"),
      jQuery("body").removeClass("open-body-portfolio");
  }),
  jQuery(".search-form-header").hide(),
  jQuery(".search-icon").click(function () {
    jQuery(".search-form-header").show().css("visibility", "visible"),
      jQuery(".search-form-header .form-group-header input").focus();
  }),
  jQuery(".close-icon").click(function () {
    jQuery(".search-form-header").hide(),
      jQuery(".search-form-header .form-group-header input").val("");
  });
var AgeSlider,
  lightboxVideo = GLightbox({ selector: ".to-pop" }),
  lightboximage = GLightbox({ selector: ".gallery-pop" });
function appHeight() {
  var s = $(".top-wrap").height(),
    o = $(".main_header").height(),
    e = window.innerHeight - s;
  $(".banner_wrapper").css("min-height", e - 30),
    $(".banner_wrapper").css("padding-top", o);
}
function productSlider() {
  569 > jQuery(window).width()
    ? !$slickProduct &&
      (jQuery(".product_box").length > 1 &&
        jQuery(".product_box_wrap").slick({
          dots: !1,
          infinite: !0,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: !0,
          autoplaySpeed: 2500,
          arrows: !0,
          prevArrow:
            '<button class="slide-arrow slick-prev double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M75 69.2c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4M33.5 37.5l15 15H60l-15-15 15-15H48.5l-15 15zm-22.5 0l15 15h11.5l-15-15 15-15H26l-15 15z" clip-path="url(#B)"/></svg></button>',
          nextArrow:
            '<button class="slide-arrow slick-next double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2m26.5-46.7H15l15 15-15 15h11.5l15-15-15-15zm22.5 0H37.5l15 15-15 15H49l15-15-15-15z" clip-path="url(#B)"/></svg></button>',
        }),
      ($slickProduct = !0))
    : jQuery(window).width() > 567 &&
      $slickProduct &&
      (jQuery(".product_box_wrap").slick("unslick"), ($slickProduct = !1));
}
function productSlider() {
  jQuery(".product_box_wrap").each(function () {
    var $sliderr = jQuery(this);
    var autoplaySetting = true; // Default value for autoplay
    // Check if the parent section has the class 'no-autoplay'
    if ($sliderr.closest("section").hasClass("no-autoplay")) {
      autoplaySetting = false; // If yes, set autoplay to false
    }
    if (jQuery(window).width() < 569) {
      var proSlider = jQuery(this).find(".product_box").length;
      if (proSlider > 1 && !$sliderr.hasClass('slick-initialized')) {
        jQuery(this).slick({
          dots: !1,
          infinite: !0,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: autoplaySetting,
          autoplaySpeed: 2500,
          arrows: !0,
          prevArrow:
            '<button class="slide-arrow slick-prev double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M75 69.2c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4M33.5 37.5l15 15H60l-15-15 15-15H48.5l-15 15zm-22.5 0l15 15h11.5l-15-15 15-15H26l-15 15z" clip-path="url(#B)"/></svg></button>',
          nextArrow:
            '<button class="slide-arrow slick-next double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2m26.5-46.7H15l15 15-15 15h11.5l15-15-15-15zm22.5 0H37.5l15 15-15 15H49l15-15-15-15z" clip-path="url(#B)"/></svg></button>',
        });
      }
    } else if (jQuery(window).width() > 567) {
      if ($sliderr.hasClass('slick-initialized')) {
        $sliderr.slick('unslick'); // Unslick the slider if it's initialized
      }
    }
  });
}

function featureSlider() {
  jQuery(".feature_outer").each(function () {
    var $slider = jQuery(this);
    var autoplaySetting = true; // Default value for autoplay
    // Check if the parent section has the class 'no-autoplay'
    if ($slider.closest("section").hasClass("no-autoplay")) {
      autoplaySetting = false; // If yes, set autoplay to false
    }
    if (jQuery(window).width() < 768) {
      var feaSlider = jQuery(this).find(".feature_box").length;
      if (feaSlider > 1 && !$slider.hasClass('slick-initialized')) {
        jQuery(this).slick({
          dots: !1,
          infinite: !0,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: autoplaySetting,
          autoplaySpeed: 2500,
          arrows: !0,
          prevArrow:
            '<button class="slide-arrow slick-prev double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M75 69.2c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4M33.5 37.5l15 15H60l-15-15 15-15H48.5l-15 15zm-22.5 0l15 15h11.5l-15-15 15-15H26l-15 15z" clip-path="url(#B)"/></svg></button>',
          nextArrow:
            '<button class="slide-arrow slick-next double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2m26.5-46.7H15l15 15-15 15h11.5l15-15-15-15zm22.5 0H37.5l15 15-15 15H49l15-15-15-15z" clip-path="url(#B)"/></svg></button>',
        });
      }
    } else if (jQuery(window).width() > 767) {
      if ($slider.hasClass('slick-initialized')) {
        $slider.slick('unslick'); // Unslick the slider if it's initialized
      }
    }
  });
}


function speakerSlider() {
  jQuery(".sps-row").each(function () {
    var $sliders = jQuery(this);
    var autoplaySetting = true; // Default value for autoplay
    // Check if the parent section has the class 'no-autoplay'
    if ($sliders.closest("section").hasClass("no-autoplay")) {
      autoplaySetting = false; // If yes, set autoplay to false
    }
    if (jQuery(window).width() < 768) {
      var speSlider = jQuery(this).find(".speaker-block").length;
      if (speSlider > 1 && !$sliders.hasClass('slick-initialized')) {
        jQuery(this).slick({
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: autoplaySetting,
          autoplaySpeed: 2500,
          arrows: true,
          prevArrow:
            '<button class="slide-arrow slick-prev double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M75 69.2c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4M33.5 37.5l15 15H60l-15-15 15-15H48.5l-15 15zm-22.5 0l15 15h11.5l-15-15 15-15H26l-15 15z" clip-path="url(#B)"/></svg></button>',
          nextArrow:
            '<button class="slide-arrow slick-next double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2m26.5-46.7H15l15 15-15 15h11.5l15-15-15-15zm22.5 0H37.5l15 15-15 15H49l15-15-15-15z" clip-path="url(#B)"/></svg></button>',
        });
      }
    } else if (jQuery(window).width() > 767) {
      if ($sliders.hasClass('slick-initialized')) {
        $sliders.slick('unslick'); // Unslick the slider if it's initialized
      }
    }
  });
}

(lightboxVideo.on("slide_changed", ({ prev: s, current: o }) => {
  console.log("Prev slide", s), console.log("Current slide", o);
  let { slideIndex: e, slideNode: i, slideConfig: l, player: t } = o;
  t &&
    (t.ready || t.on("ready", (s) => {}),
    t.on("play", (s) => {
      console.log("Started play");
    }),
    t.on("volumechange", (s) => {
      console.log("Volume change");
    }),
    t.on("ended", (s) => {
      console.log("Video ended");
    }));
}),
window.addEventListener("resize", appHeight),
appHeight(),
jQuery(document).on("click", ".menu-icon", function (s) {
  var o = jQuery(".navbar-navigation");
  jQuery(this).toggleClass("ac"),
    o.is(s.target) ||
      0 !== o.has(s.target).length ||
      jQuery(".menu-icon").removeClass("ac"),
    jQuery(".nav-wrapper").addClass("open"),
    jQuery("body").addClass("o-hidden"),
    jQuery(".sub-menu").removeClass("open"),
    jQuery(".primary-nav li").removeClass("active");
}),
jQuery("span.menu-arrow")
  .next(".sub-menu")
  .find("li:eq(0)")
  .before(
    '<li class="menu-toggle-back" role="menuitem"> <a href="#" class="back-btn"><i class="icon-arrow"></i>Back</a> </li>'
  ),
jQuery("span.menu-arrow").click(function (s) {
  s.preventDefault(),
    jQuery(this).parent(".menu-item-has-children").addClass("active"),
    jQuery(this).next(".sub-menu").addClass("open");
}),
jQuery(".menu-toggle-back").click(function (s) {
  s.stopPropagation(),
    jQuery(".sub-menu").removeClass("open"),
    jQuery(".navigation li").removeClass("active");
}),
jQuery(".overlay").click(function () {
  jQuery("body").hasClass("o-hidden") && jQuery("body").removeClass("o-hidden");
}),
jQuery(".mob-btn-close").click(function () {
  jQuery(".nav-wrapper").hasClass("open") &&
    (jQuery(".nav-wrapper").removeClass("open"),
    jQuery("body").removeClass("o-hidden"));
}),
jQuery(window).scroll(function () {
  jQuery(this).scrollTop() >= 50
    ? jQuery("#return-to-top").fadeIn(200)
    : jQuery("#return-to-top").fadeOut(200);
}),
jQuery("#return-to-top").click(function () {
  jQuery("body,html").animate({ scrollTop: 0 }, 500);
}),
ScrollOut({ threshold: 0.5, once: !0 }),
$(".more").toggle(
  function () {
    $(this).text("less..").siblings(".complete").show();
  },
  function () {
    $(this).text("more..").siblings(".complete").hide();
  }
),
jQuery(".ad_banner_inner").slick({
  draggable: !0,
  autoplay: !0,
  autoplaySpeed: 7e3,
  arrows: !1,
  dots: !1,
  fade: !0,
  speed: 500,
  infinite: !0,
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: "ease-in-out",
}),
jQuery(".banner_image_slide").slick({
  draggable: !0,
  autoplay: !0,
  autoplaySpeed: 7e3,
  arrows: !1,
  dots: !1,
  fade: !0,
  speed: 500,
  infinite: !0,
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: "ease-in-out",
}),
jQuery(".starts_counter_slider").slick({
  dots: !1,
  infinite: !1,
  arrows: !1,
  speed: 300,
  autoplay: !0,
  autoplaySpeed: 5e3,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: { slidesToShow: 3, slidesToScroll: 1, arrows: !0 },
    },
    {
      breakpoint: 992,
      settings: { slidesToShow: 3, slidesToScroll: 1, arrows: !0 },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: !0,
        prevArrow:
          '<button class="slide-arrow slick-prev double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M75 69.2c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4M33.5 37.5l15 15H60l-15-15 15-15H48.5l-15 15zm-22.5 0l15 15h11.5l-15-15 15-15H26l-15 15z" clip-path="url(#B)"/></svg></button>',
        nextArrow:
          '<button class="slide-arrow slick-next double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2m26.5-46.7H15l15 15-15 15h11.5l15-15-15-15zm22.5 0H37.5l15 15-15 15H49l15-15-15-15z" clip-path="url(#B)"/></svg></button>',
      },
    },
    {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        prevArrow:
          '<button class="slide-arrow slick-prev double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M75 69.2c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4M33.5 37.5l15 15H60l-15-15 15-15H48.5l-15 15zm-22.5 0l15 15h11.5l-15-15 15-15H26l-15 15z" clip-path="url(#B)"/></svg></button>',
        nextArrow:
          '<button class="slide-arrow slick-next double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2m26.5-46.7H15l15 15-15 15h11.5l15-15-15-15zm22.5 0H37.5l15 15-15 15H49l15-15-15-15z" clip-path="url(#B)"/></svg></button>',
      },
    },
    {
      breakpoint: 401,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        prevArrow:
          '<button class="slide-arrow slick-prev double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M75 69.2c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4M33.5 37.5l15 15H60l-15-15 15-15H48.5l-15 15zm-22.5 0l15 15h11.5l-15-15 15-15H26l-15 15z" clip-path="url(#B)"/></svg></button>',
        nextArrow:
          '<button class="slide-arrow slick-next double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2m26.5-46.7H15l15 15-15 15h11.5l15-15-15-15zm22.5 0H37.5l15 15-15 15H49l15-15-15-15z" clip-path="url(#B)"/></svg></button>',
      },
    },
  ],
}),
jQuery(".three-col-slider-only").slick({
  infinite: !1,
  dots: !1,
  arrows: !1,
  speed: 300,
  autoplay: !0,
  autoplaySpeed: 5e3,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: { slidesToShow: 3, slidesToScroll: 1, dots: !1, arrows: !1 },
    },
    {
      breakpoint: 992,
      settings: { slidesToShow: 2, slidesToScroll: 1, dots: !1, arrows: !1 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1, slidesToScroll: 1, dots: !1, arrows: !1 },
    },
  ],
}),
jQuery(".four-col-slider").each(function () {
  var autoplaySetting = true; // Default value for autoplay

  // Check if the parent section has the class 'no-autoplay'
  if (jQuery(this).closest("section").hasClass("no-autoplay")) {
    autoplaySetting = false; // If yes, set autoplay to false
  }
  jQuery(this).slick({
    infinite: !0,
    arrows: !1,
    speed: 300,
    autoplay: !0,
    autoplaySpeed: 5e3,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button class="slide-arrow slick-prev double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M75 69.2c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4M33.5 37.5l15 15H60l-15-15 15-15H48.5l-15 15zm-22.5 0l15 15h11.5l-15-15 15-15H26l-15 15z" clip-path="url(#B)"/></svg></button>',
    nextArrow:
      '<button class="slide-arrow slick-next double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2m26.5-46.7H15l15 15-15 15h11.5l15-15-15-15zm22.5 0H37.5l15 15-15 15H49l15-15-15-15z" clip-path="url(#B)"/></svg></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3, slidesToScroll: 1, dots: !1, arrows: !1 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2, slidesToScroll: 1, dots: !1, arrows: !1 },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: autoplaySetting,
          dots: !1,
          arrows: !0,
        },
      },
    ],
  });
}),
jQuery(".featured-right-side").each(function () {
  var autoplaySetting = true; // Default value for autoplay

  // Check if the parent section has the class 'no-autoplay'
  if (jQuery(this).closest("section").hasClass("no-autoplay")) {
    autoplaySetting = false; // If yes, set autoplay to false
  }
  jQuery(".featured-logo-slider-wrap").length > 1 &&
    jQuery(this).slick({
      draggable: !0,
      autoplay: !0,
      autoplaySpeed: 7e3,
      arrows: !1,
      dots: !0,
      fade: !0,
      speed: 500,
      infinite: !1,
      cssEase: "ease-in-out",
      prevArrow:
        '<button class="slide-arrow slick-prev double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M75 69.2c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4M33.5 37.5l15 15H60l-15-15 15-15H48.5l-15 15zm-22.5 0l15 15h11.5l-15-15 15-15H26l-15 15z" clip-path="url(#B)"/></svg></button>',
      nextArrow:
        '<button class="slide-arrow slick-next double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2m26.5-46.7H15l15 15-15 15h11.5l15-15-15-15zm22.5 0H37.5l15 15-15 15H49l15-15-15-15z" clip-path="url(#B)"/></svg></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: { arrows: !0, autoplay: autoplaySetting, dots: !1 },
        },
      ],
    });
}),
jQuery(".big5-testimonial-wrap-slider").each(function () {
  var autoplaySetting = true; // Default value for autoplay

  // Check if the parent section has the class 'no-autoplay'
  if (jQuery(this).closest("section").hasClass("no-autoplay")) {
    autoplaySetting = false; // If yes, set autoplay to false
  }
  jQuery(this).slick({
    draggable: !0,
    autoplay: !0,
    autoplaySpeed: 7e3,
    arrows: !1,
    dots: !1,
    fade: !0,
    speed: 500,
    infinite: !0,
    cssEase: "ease-in-out",
    prevArrow:
      '<button class="slide-arrow slick-prev double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M75 69.2c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4M33.5 37.5l15 15H60l-15-15 15-15H48.5l-15 15zm-22.5 0l15 15h11.5l-15-15 15-15H26l-15 15z" clip-path="url(#B)"/></svg></button>',
    nextArrow:
      '<button class="slide-arrow slick-next double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2m26.5-46.7H15l15 15-15 15h11.5l15-15-15-15zm22.5 0H37.5l15 15-15 15H49l15-15-15-15z" clip-path="url(#B)"/></svg></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: { arrows: !0, autoplay: autoplaySetting, dots: !1 },
      },
    ],
  });
}),
jQuery(".testimonial-slider-row").each(function () {
  var autoplaySetting = true; // Default value for autoplay

  // Check if the parent section has the class 'no-autoplay'
  if (jQuery(this).closest("section").hasClass("no-autoplay")) {
    autoplaySetting = false; // If yes, set autoplay to false
  }
  jQuery(this).slick({
    dots: !0,
    infinite: !1,
    arrows: !1,
    speed: 300,
    autoplay: !0,
    autoplaySpeed: 5e3,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<button class="slide-arrow slick-prev double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M75 69.2c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4M33.5 37.5l15 15H60l-15-15 15-15H48.5l-15 15zm-22.5 0l15 15h11.5l-15-15 15-15H26l-15 15z" clip-path="url(#B)"/></svg></button>',
    nextArrow:
      '<button class="slide-arrow slick-next double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2m26.5-46.7H15l15 15-15 15h11.5l15-15-15-15zm22.5 0H37.5l15 15-15 15H49l15-15-15-15z" clip-path="url(#B)"/></svg></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: { arrows: !0, autoplay: autoplaySetting, dots: !1 },
      },
    ],
  });
}),
jQuery(".ba-slide").slick({
  draggable: !0,
  autoplay: !0,
  autoplaySpeed: 7e3,
  arrows: !1,
  dots: !1,
  fade: !0,
  speed: 500,
  infinite: !0,
  cssEase: "ease-in-out",
}),
jQuery(".exhibitor-slider").each(function () {
  var autoplaySetting = true; // Default value for autoplay
  // Check if the parent section has the class 'no-autoplay'
  if (jQuery(this).closest("section").hasClass("no-autoplay")) {
    autoplaySetting = false; // If yes, set autoplay to false
  }
  jQuery(this).slick({
    dots: !1,
    infinite: !0,
    arrows: !1,
    speed: 300,
    autoplay: !0,
    autoplaySpeed: 2500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow:
      '<button class="slide-arrow slick-prev double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M75 69.2c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4M33.5 37.5l15 15H60l-15-15 15-15H48.5l-15 15zm-22.5 0l15 15h11.5l-15-15 15-15H26l-15 15z" clip-path="url(#B)"/></svg></button>',
    nextArrow:
      '<button class="slide-arrow slick-next double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2m26.5-46.7H15l15 15-15 15h11.5l15-15-15-15zm22.5 0H37.5l15 15-15 15H49l15-15-15-15z" clip-path="url(#B)"/></svg></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4, slidesToScroll: 1, arrows: !1 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 3, slidesToScroll: 1, arrows: !1 },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: !0,
          autoplay: autoplaySetting,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: autoplaySetting,
          arrows: !0,
        },
      },
      {
        breakpoint: 401,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: autoplaySetting,
          arrows: !0,
        },
      },
    ],
  });
}),
jQuery(".logo-slide_sponsor").slick({
  dots: !1,
  infinite: !1,
  arrows: !1,
  speed: 300,
  autoplay: !0,
  autoplaySpeed: 5e3,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [{ breakpoint: 768, settings: { arrows: !1 } }],
}),
jQuery(".two-col-article_wrap").each(function () {
  var autoplaySetting = true; // Default value for autoplay
  // Check if the parent section has the class 'no-autoplay'
  if (jQuery(this).closest("section").hasClass("no-autoplay")) {
    autoplaySetting = false; // If yes, set autoplay to false
  }
  jQuery(this).slick({
    infinite: !1,
    dots: !1,
    arrows: !1,
    speed: 300,
    autoplay: !0,
    autoplaySpeed: 5e3,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow:
      '<button class="slide-arrow slick-prev double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M75 69.2c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4M33.5 37.5l15 15H60l-15-15 15-15H48.5l-15 15zm-22.5 0l15 15h11.5l-15-15 15-15H26l-15 15z" clip-path="url(#B)"/></svg></button>',
    nextArrow:
      '<button class="slide-arrow slick-next double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2m26.5-46.7H15l15 15-15 15h11.5l15-15-15-15zm22.5 0H37.5l15 15-15 15H49l15-15-15-15z" clip-path="url(#B)"/></svg></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 2, slidesToScroll: 1, dots: !1, arrows: !1 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2, slidesToScroll: 1, dots: !1, arrows: !1 },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: autoplaySetting,
          dots: !1,
          arrows: !0,
        },
      },
    ],
  });
}),
jQuery(".three-col-article_wrap").each(function () {
  var autoplaySetting = true; // Default value for autoplay
  // Check if the parent section has the class 'no-autoplay'
  if (jQuery(this).closest("section").hasClass("no-autoplay")) {
    autoplaySetting = false; // If yes, set autoplay to false
  }
  jQuery(this).slick({
    infinite: !1,
    dots: !1,
    arrows: !1,
    speed: 300,
    autoplay: !0,
    autoplaySpeed: 5e3,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      '<button class="slide-arrow slick-prev double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M75 69.2c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4M33.5 37.5l15 15H60l-15-15 15-15H48.5l-15 15zm-22.5 0l15 15h11.5l-15-15 15-15H26l-15 15z" clip-path="url(#B)"/></svg></button>',
    nextArrow:
      '<button class="slide-arrow slick-next double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2m26.5-46.7H15l15 15-15 15h11.5l15-15-15-15zm22.5 0H37.5l15 15-15 15H49l15-15-15-15z" clip-path="url(#B)"/></svg></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3, slidesToScroll: 1, dots: !1, arrows: !1 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2, slidesToScroll: 1, dots: !1, arrows: !1 },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: autoplaySetting,
          dots: !1,
          arrows: !0,
        },
      },
    ],
  });
}),
jQuery(".four-col-article_wrap").each(function () {
  var autoplaySetting = true; // Default value for autoplay
  // Check if the parent section has the class 'no-autoplay'
  if (jQuery(this).closest("section").hasClass("no-autoplay")) {
    autoplaySetting = false; // If yes, set autoplay to false
  }
  jQuery(this).slick({
    infinite: !1,
    dots: !1,
    arrows: !1,
    speed: 300,
    autoplay: !0,
    autoplaySpeed: 5e3,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button class="slide-arrow slick-prev double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M75 69.2c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4M33.5 37.5l15 15H60l-15-15 15-15H48.5l-15 15zm-22.5 0l15 15h11.5l-15-15 15-15H26l-15 15z" clip-path="url(#B)"/></svg></button>',
    nextArrow:
      '<button class="slide-arrow slick-next double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2m26.5-46.7H15l15 15-15 15h11.5l15-15-15-15zm22.5 0H37.5l15 15-15 15H49l15-15-15-15z" clip-path="url(#B)"/></svg></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3, slidesToScroll: 1, dots: !1, arrows: !1 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2, slidesToScroll: 1, dots: !1, arrows: !1 },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: autoplaySetting,
          dots: !1,
          arrows: !0,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: autoplaySetting,
          dots: !1,
          arrows: !0,
        },
      },
    ],
  });
}),
jQuery(".top-ad-banner-image").slick({
  draggable: !0,
  autoplay: !0,
  autoplaySpeed: 7e3,
  arrows: !1,
  dots: !1,
  speed: 500,
  infinite: !0,
  cssEase: "ease-in-out",
}),
($slickProduct = !1),
($slickFeature = !1),
($slickspeaker = !1),
jQuery(document).ready(function () {
  productSlider(),
    featureSlider(),
    speakerSlider(),
    setInterval(function () {
      jQuery(".contentPost").addClass("show-content");
    }, 4e3),
    jQuery(".contentPostclose").on("click", function () {
      jQuery(".contentPost").addClass("hidecontentPost");
    }),
    jQuery(this).parents("section.faq-accordion-wrap").attr("id"),
    jQuery(document).on("click", ".arrow", function () {
      if (jQuery(this).hasClass("active"))
        jQuery(this).parents(".accordion-item").removeClass("ac-item-active"),
          jQuery(this).removeClass("active"),
          jQuery(this).parent().next().slideUp();
      else {
        var s = jQuery(this)
          .parents(".accodion-wrapper")
          .children(".openaccordian");
        s.length > 0 &&
          (s.find(".arrow").removeClass("active"),
          s
            .find(".arrow")
            .parents(".accordion-item")
            .removeClass("ac-item-active"),
          s.find(".content").slideUp(),
          s.removeClass(".openaccordian")),
          jQuery(this).addClass("active"),
          jQuery(this).parents(".accordion-item").addClass("ac-item-active"),
          jQuery(this).parent().next().slideDown(),
          jQuery(this).parents(".accordion-item").addClass("openaccordian");
      }
    });
}),
jQuery(window).on("resize", function () {
  productSlider(), featureSlider(),speakerSlider();
}),

jQuery(window).bind("load", function () {
  jQuery("body").addClass("loaded"),
    jQuery(".overlay-wrap").addClass("loaded"),
    setTimeout(function () {
      jQuery(".overlay-wrap").css({ display: "none" });
    }, 4e3);
}),
jQuery(".tab-nav span").on("click", function () {
  jQuery([jQuery(this).parent()[0], jQuery(jQuery(this).data("href"))[0]])
    .addClass("active")
    .siblings(".active")
    .removeClass("active");
}),
($slickAgenda = !1),
768 > jQuery(window).width())
  ? (jQuery(".tab-border").remove(),
    !$slickAgenda &&
      (jQuery(".tab-nav ul li").length > 1 &&
        jQuery(".tab-nav ul").slick({
          dots: !1,
          infinite: !0,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: !1,
          autoplaySpeed: 2500,
          arrows: !0,
        }),
      ($slickAgenda = !0)))
  : jQuery(window).width() > 767 &&
    $slickAgenda &&
    (jQuery(".tab-nav ul").slick("unslick"), ($slickAgenda = !1)),
  jQuery(".twocol-starts_slider").each(function () {
    var autoplaySetting = true; // Default value for autoplay

    // Check if the parent section has the class 'no-autoplay'
    if (jQuery(this).closest("section").hasClass("no-autoplay")) {
      autoplaySetting = false; // If yes, set autoplay to false
    }
    jQuery(this).slick({
      infinite: !0,
      dots: !1,
      arrows: !1,
      speed: 300,
      autoplay: !0,
      autoplaySpeed: 5e3,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: !1,
            arrows: !1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: !1,
            arrows: !0,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: autoplaySetting,
            dots: !1,
            arrows: !0,
            prevArrow:
              '<button class="slide-arrow slick-prev double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M75 69.2c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4M33.5 37.5l15 15H60l-15-15 15-15H48.5l-15 15zm-22.5 0l15 15h11.5l-15-15 15-15H26l-15 15z" clip-path="url(#B)"/></svg></button>',
            nextArrow:
              '<button class="slide-arrow slick-next double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2m26.5-46.7H15l15 15-15 15h11.5l15-15-15-15zm22.5 0H37.5l15 15-15 15H49l15-15-15-15z" clip-path="url(#B)"/></svg></button>',
          },
        },
      ],
    });
  }),
  jQuery(".threecol-starts_slider").each(function () {
    var autoplaySetting = true; // Default value for autoplay

    // Check if the parent section has the class 'no-autoplay'
    if (jQuery(this).closest("section").hasClass("no-autoplay")) {
      autoplaySetting = false; // If yes, set autoplay to false
    }
    jQuery(this).slick({
      infinite: !0,
      dots: !1,
      arrows: !1,
      speed: 300,
      autoplay: !0,
      autoplaySpeed: 5e3,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: !1,
            arrows: !1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: !1,
            arrows: !0,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: !1,
            autoplay: autoplaySetting,
            arrows: !0,
            prevArrow:
              '<button class="slide-arrow slick-prev double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M75 69.2c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4M33.5 37.5l15 15H60l-15-15 15-15H48.5l-15 15zm-22.5 0l15 15h11.5l-15-15 15-15H26l-15 15z" clip-path="url(#B)"/></svg></button>',
            nextArrow:
              '<button class="slide-arrow slick-next double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2m26.5-46.7H15l15 15-15 15h11.5l15-15-15-15zm22.5 0H37.5l15 15-15 15H49l15-15-15-15z" clip-path="url(#B)"/></svg></button>',
          },
        },
      ],
    });
  }),
  jQuery(".fourcol-starts_slider").each(function () {
    var autoplaySetting = true; // Default value for autoplay

    // Check if the parent section has the class 'no-autoplay'
    if (jQuery(this).closest("section").hasClass("no-autoplay")) {
      autoplaySetting = false; // If yes, set autoplay to false
    }
    jQuery(this).slick({
      infinite: !0,
      arrows: !1,
      speed: 300,
      autoplay: !0,
      autoplaySpeed: 5e3,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: !1,
            arrows: !1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: !1,
            arrows: !0,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: !1,
            autoplay: autoplaySetting,
            arrows: !0,
            prevArrow:
              '<button class="slide-arrow slick-prev double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M75 69.2c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4M33.5 37.5l15 15H60l-15-15 15-15H48.5l-15 15zm-22.5 0l15 15h11.5l-15-15 15-15H26l-15 15z" clip-path="url(#B)"/></svg></button>',
            nextArrow:
              '<button class="slide-arrow slick-next double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2m26.5-46.7H15l15 15-15 15h11.5l15-15-15-15zm22.5 0H37.5l15 15-15 15H49l15-15-15-15z" clip-path="url(#B)"/></svg></button>',
          },
        },
      ],
    });
  }),
  jQuery(".fivecol-starts_slider").each(function () {
    var autoplaySetting = true; // Default value for autoplay

    // Check if the parent section has the class 'no-autoplay'
    if (jQuery(this).closest("section").hasClass("no-autoplay")) {
      autoplaySetting = false; // If yes, set autoplay to false
    }
    jQuery(this).slick({
      infinite: !0,
      arrows: !1,
      speed: 300,
      autoplay: !0,
      autoplaySpeed: 5e3,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: !1,
            arrows: !0,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: !1,
            arrows: !0,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: !1,
            autoplay: autoplaySetting,
            arrows: !0,
            prevArrow:
              '<button class="slide-arrow slick-prev double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M75 69.2c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4M33.5 37.5l15 15H60l-15-15 15-15H48.5l-15 15zm-22.5 0l15 15h11.5l-15-15 15-15H26l-15 15z" clip-path="url(#B)"/></svg></button>',
            nextArrow:
              '<button class="slide-arrow slick-next double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2m26.5-46.7H15l15 15-15 15h11.5l15-15-15-15zm22.5 0H37.5l15 15-15 15H49l15-15-15-15z" clip-path="url(#B)"/></svg></button>',
          },
        },
      ],
    });
  }),
  jQuery(".full-width-gal-slider").each(function () {
    var autoplaySetting = true; // Default value for autoplay

    // Check if the parent section has the class 'no-autoplay'
    if (jQuery(this).closest("section").hasClass("no-autoplay")) {
      autoplaySetting = false; // If yes, set autoplay to false
    }
    jQuery(this).slick({
      infinite: !0,
      arrows: !1,
      speed: 300,
      autoplay: !0,
      autoplaySpeed: 5e3,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: !0,
      rtl: !0,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: !1,
            arrows: !0,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: !1,
            arrows: !0,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: autoplaySetting,
            dots: !1,
            arrows: !0,
          },
        },
      ],
    });
  });

jQuery(".three-col-slider").each(function () {
  var autoplaySetting = true; // Default value for autoplay

  // Check if the parent section has the class 'no-autoplay'
  if (jQuery(this).closest("section").hasClass("no-autoplay")) {
    autoplaySetting = false; // If yes, set autoplay to false
  }

  jQuery(this).slick({
    infinite: !0,
    dots: !1,
    arrows: !1,
    speed: 300,
    autoplay: !0,
    autoplaySpeed: 5e3,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      '<button class="slide-arrow slick-prev double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M75 69.2c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4M33.5 37.5l15 15H60l-15-15 15-15H48.5l-15 15zm-22.5 0l15 15h11.5l-15-15 15-15H26l-15 15z" clip-path="url(#B)"/></svg></button>',
    nextArrow:
      '<button class="slide-arrow slick-next double-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 75" xmlns:v="https://vecta.io/nano"><defs><path id="A" d="M0 0h75v75H0z"/></defs><clipPath id="B"><use xlink:href="#A"/></clipPath><path d="M0 69.2V5.8C0 2.6 2.6 0 5.8 0h63.4C72.4 0 75 2.6 75 5.8v63.4c0 3.2-2.6 5.8-5.8 5.8H5.8C2.6 75 0 72.4 0 69.2m26.5-46.7H15l15 15-15 15h11.5l15-15-15-15zm22.5 0H37.5l15 15-15 15H49l15-15-15-15z" clip-path="url(#B)"/></svg></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3, slidesToScroll: 1, dots: !1, arrows: !1 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2, slidesToScroll: 1, dots: !1, arrows: !1 },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          autoplay: autoplaySetting,
          slidesToScroll: 1,
          dots: !1,
          arrows: !0,
        },
      },
    ],
  });
});
jQuery(".logo-slider--inner").slick({
  speed: 2300,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  slidesToShow: 9,
  slidesToScroll: 1,
  pauseOnHover: false,
  pauseOnFocus: false,
  draggable: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 5,
        swipe: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
        swipe: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        swipe: false,
      },
    },
  ],
});
