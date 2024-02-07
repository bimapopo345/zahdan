(function ($) {
  ("use strict");

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Menangkap elemen tautan "Tentang Kami"
  var about = document.querySelector('a[href="#about"]');

  // Menambahkan penanganan klik pada tautan
  about.addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah perilaku default tautan

    // Mendapatkan elemen dengan ID "about-section"
    var aboutSection = document.getElementById("about");

    // Menggulir ke elemen tersebut
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });

  // Menangkap elemen tautan "Tentang Kami"
  var kursus = document.querySelector('a[href="#kursus"]');

  // Menambahkan penanganan klik pada tautan
  kursus.addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah perilaku default tautan

    // Mendapatkan elemen dengan ID "about-section"
    var kursusSection = document.getElementById("kursus");

    // Menggulir ke elemen tersebut
    kursusSection.scrollIntoView({ behavior: "smooth" });
  });

  // Menangkap elemen tautan "Tentang Kami"
  var pengajar = document.querySelector('a[href="#pengajar"]');

  // Menambahkan penanganan klik pada tautan
  pengajar.addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah perilaku default tautan

    // Mendapatkan elemen dengan ID "about-section"
    var pengajarSection = document.getElementById("pengajar");

    // Menggulir ke elemen tersebut
    pengajarSection.scrollIntoView({ behavior: "smooth" });
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    items: 1,
  });
})(jQuery);
