$(window).scroll(function() {
          if ($(document).scrollTop() > 50) {
              $('.navbar').addClass('navScroll');
              console.log("OK");
          } else {
              $('.navbar').removeClass('navScroll');

          }

          
});