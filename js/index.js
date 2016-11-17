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

  $(window).resize(function() {
    if ($(window).width() < 800) {
      $(".arrow").show('slow').delay( 3000).hide('slow');
    } else if ($(window).height() > 1050) {
      $(".arrow").addClass('hide');
    } else if ($(window).width() < 767) {
      $(".modal-box").addClass('fixed');
      $(".modal-box").removeClass('flex');
    } else {
      $(".modal-box").addClass('flex');
      $(".modal-box").removeClass('fixed');
      // $(".arrow").addClass('hide');
    }
  });

  $(window).resize();
  $('map').imageMapResize();
});
