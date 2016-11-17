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
    if ($(window).width() < 992) {
      $(".modal-box").addClass('fixed');
      $(".modal-box").removeClass('flex');
    } else {
      // $(".modal-box").css({
      //     top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
      //     left: ($(window).width() - $(".modal-box").outerWidth()) / 2
      // });
      $(".modal-box").addClass('flex');
      $(".modal-box").removeClass('fixed');
    }
  });

  $(window).resize();

});
