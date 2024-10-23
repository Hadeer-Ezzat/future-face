function lightbox_open() {
  var lightBoxVideo = document.getElementById("culture-video");
  document.getElementById('video').style.display = 'block';
   document.getElementById('fade').style.display = 'block';
  lightBoxVideo.play();
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("culture-video");
  document.getElementById('video').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
}

// $('.circle').hover(function(){
//   $('.circle').toggleClass('active-date');

// });

$('.circle').hover(
       function(){ $(this).addClass('active-date') },
       function(){ $(this).removeClass('active-date') }
)

// BackToTop
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn();
    } else {
      $(".back-to-top").fadeOut();
    }
  });

  $(".back-to-top").click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },

      1000
    );
    return false;
  });

