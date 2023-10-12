document.addEventListener("DOMContentLoaded", function (event) {
  //     console.log("document ready");
  //     $(window).on("scroll", function() {
  //         console.log("window scroll");

  //         if($(window).scrollTop() > 50) {
  //           console.log("greater 5o");

  //             $(".header").addClass("active");
  //         } else {
  //           console.log("less 50");

  //             //remove the background property so it comes transparent again (defined in your css)
  //            $(".header").removeClass("active");
  //         }
  //     });

  $(function () {
    var objTable = document.getElementById("whole-content");
    objTable.addEventListener(
      "scroll",
      function () {
        if ($(objTable).scrollTop() > 56) {
          $("#navbar").addClass("whiteBg");
        } else {
          //remove the background property so it comes transparent again (defined in your css)
          $("#navbar").removeClass("whiteBg");
        }
      },
      false
    );
  });

  // $(".scrollLink").click(function(event) {
  //   event.preventDefault();
  //   $("html, body").animate({
  //       scrollTop: $($(this).attr("href")).offset().top
  //     }, 500);
  // });
});
