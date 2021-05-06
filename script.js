visible = 0;
$(".card").on("click", function () {
  if (visible == 0) {
    // Show Back-Side
    $(this).removeClass("flip");
    $(this).addClass("flip_back");
    $(this).children("div").delay(300).fadeOut(300);
    $(this).children(".desc").delay(300).fadeIn(300);
    visible = 1;
  } else {
    // Show Front-Side
    $(this).children(".desc").fadeOut(300).delay(300);
    $(this).removeClass("flip_back");
    $(this).addClass("flip");
    $(this).children("div").delay(300).fadeIn(300);
    visible = 0;
  }
});

$(".card")
  .mouseenter(function () {
    if ($(this).hasClass("c1")) {
      $("body").css({ background: "rgba(220,140,50,1)" });
    } else if ($(this).hasClass("c2")) {
      $("body").css({ background: "#5479ff" });
    } else if ($(this).hasClass("c3")) {
      $("body").css({ background: "rgba(0,100,00,1)" });
    }
  })
  .mouseleave(function () {
    $("body").css({ background: "#323232" });
  });

$(document).ready(function () {
  // $(".info").delay(5000).fadeOut(300);
  // $(".show_info").delay(5000).fadeIn(300);
  $(".show_info").on("click", function () {
    $(".info").fadeIn(300);
    $(".show_info").fadeOut(300);
  });
  $(".info").on("click", function () {
    $(".info").fadeOut(300);
    $(".show_info").fadeIn(300);
  });
});
