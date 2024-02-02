var Organic = {

  events: function () {
    $(window).on('mousemove', Organic.mouseParallax);
    $(document).on('scroll', Organic.scrollAction);
    $('.toform').on('click', Organic.scrollToForm);
    $('.promo__poster').on('click', Organic.starVideo);
  },

  mouseParallax: function () {
    if ($(window).width() >= 990) {
      var pos_x = event.pageX,
        pos_y = event.pageY,

        presentBlockWidth = $('.present').width(),
        presentBlockHeight = $('.present').height(),
        presentLeft = presentBlockWidth / 2 - pos_x,
        presentTop = presentBlockHeight / 2 - pos_y;

      $('.product').css({
        transform: 'translate(' + presentLeft / 300 + "%" + ", -50%)",
        'margin-top': presentTop / 70 + 'px'
      });
      $('.product_mod').css({
        transform: 'translate(' + presentLeft / 300 + "%" + ", -50%)" + 'rotate(15deg)',
        'margin-top': presentTop / 200 + 'px'
      });
    } else {
      $('.product').removeAttr('style');
    }
  },

  scrollAction: function () {
    var scroll = $(document).scrollTop(),
      promoBlockPos = $('.promo').offset().top,
      scrollOnPromo = scroll - promoBlockPos,

      descriptionBlockPos = $('.description').offset().top,
      scrollOnDescription = scroll - descriptionBlockPos,

      advantageBlockPos = $('.advantages').offset().top;

    $('.promo__decore').css({transform: 'translateY(' + scrollOnPromo / 4 + "px)"});
    $('.description__leaf_01').css({transform: 'translateY(' + scrollOnDescription / 3 + "px)"});
    $('.description__leaf_02').css({transform: 'translateY(' + scrollOnDescription / 4 + "px)"});
    $('.description__leaf_03').css({transform: 'translateY(' + scrollOnDescription / 7 + "px)"});
    $('.description__leaf_04').css({transform: 'translateY(' + scrollOnDescription / 7 + "px)"});
    $('.description__leaf_05').css({transform: 'translateY(' + scrollOnDescription / 5 + "px)"});

    if (scroll >= advantageBlockPos - 200) {
      $('.advantages__item').addClass('move')
    }

  },

  scrollToForm: function () {
    $("html, body").animate({scrollTop: $("form").offset().top - 300}, 1000);
    return false;
  },

  starVideo: function () {
    $(this).hide();
    $(this).next('video.avid').get(0).play();
  },

};

$(window).resize(Organic.mouseParallax);

$(document).ready(function () {
  Organic.events();
});
