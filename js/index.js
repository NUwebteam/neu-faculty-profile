$(function(){

  var appendthis =  ("<div class='modal-overlay js-modal-close'></div>");

    $('a[data-modal-id]').click(function(e) {
      e.preventDefault();
      $("body").append(appendthis);
      $(".modal-overlay").fadeTo(250, .75);
      // $(".js-modalbox").fadeIn(500);
      var modalBox = $(this).attr('data-modal-id');
      $('#'+modalBox).fadeIn($(this).data());
    });


  $(".js-modal-close, .modal-overlay").click(function() {
      $(".modal-box, .modal-overlay").fadeOut(250, function() {
          $(".modal-overlay").remove();
      });

  });
  
  $(".arrow").hide();

  // Check devise/window size for scroll prompt
  $(window).on('load', function() {
    if ($(window).width() <= 800) {
      $(".arrow").show('slow').delay( 3000).hide('slow');
    } else {
      $(".arrow").hide();
    }
  });


  // Resize function with timeout to see if prompt should be shown to scroll of not
  var resizeTimer;

  $(window).on('resize', function(e) {

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {

      if ($(window).width() <= 800) {
        $(".arrow").show('slow').delay( 3000).hide('slow');
      } else if ($(window).height() > 1050) {
        $(".arrow").hide();
      } else if ($(window).width() < 767) {
        $(".modal-box").addClass('fixed');
        $(".modal-box").removeClass('flex');
      } else {
        $(".modal-box").addClass('flex');
        $(".modal-box").removeClass('fixed');
        $(".arrow").hide();
      }

    }, 250);

  });

  // Image Map Resizer to keep coordinates for clickable items in the right location
  // on an image
  $('map').imageMapResize();
});
