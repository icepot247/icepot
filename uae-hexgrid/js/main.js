var winWidth = window.innerWidth;
var winHeigth = window.innerHeight;

$(document).ready(function() {

  var description = new Slider(),
    compositionSlider = new Slider(),
    reviewsSlider = new Slider(),
    promoPhotos = new Slider(),
    promoSlider = new Slider(),
    albumSlider = new Slider();

  description.init(
    '.description__case',
    'mobile',
    '.slick-arrow',
    false,
    false
  );
  compositionSlider.init(
    '.composition__case',
    'mobile',
    false,
    false,
    {
      dots: true
    }
  );

  reviewsSlider.init(
    '.reviews__wrap',
    'mobile',
    false,
    false,
    {
      dots: true
    }
  );

  promoPhotos.init(
    '.promo__photos',
    'mobile',
    false,
    'changeBG',
    {
      arrows: true,
      asNavFor: '.promo__case'
    }
  );
  promoSlider.init(
    '.promo__case',
    false,
    false,
    'changeBG',
    {
      arrows: true,
      responsive: [
        {
          breakpoint: 990,
          settings: {
            arrows: false,
            asNavFor: '.promo__photos',
          }
        }
      ]
    }
  );

  albumSlider.init(
    '.album__case',
    false,
    false,
    false,
    {
      dots: true
    }
  );

  document.addEventListener('scroll', function () {
    scrollEffects();
    horizontalScroll('[data-h-scroll]');
  })
  scrollEffects();
  toggleCase();
  winWidth > 990 ? mouseParallax() : false

});

function Slider() {

  this.settings = {
    adaptiveHeight: false,
    arrows: true,
    rtl: true
  };

  Slider.prototype.mobileSlider = function (wrap) {
    var self = this;
    if ($(window).width() <= 990) {
      if (!$(wrap).hasClass('slick-initialized')) {
        $(wrap).slick(this.settings);
      }
    }

    $(window).on('resize', function () {
      if ($(window).width() <= 990) {
        if (!$(wrap).hasClass('slick-initialized')) {
          $(wrap).slick(self.settings)
        }
      } else {
        if ($(wrap).hasClass('slick-initialized')) {
          $(wrap).slick('unslick')
        }
      }
    })
  }

  Slider.prototype.decorated = function (wrap, arrowStr) {
    var targetWrap = document.querySelector(wrap),
      arrows = targetWrap.querySelectorAll(arrowStr);

    for (var i = 0, max = arrows.length; i < max; i++) {
      arrows[i].innerHTML = '<svg><use xlink:href="#arrow"></use></svg>'
    }

  }

  Slider.prototype.changeBG = function (wrap) {

    var target = document.querySelector('[data-bg]')

    $(wrap).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      nextSlide += 1
      target.setAttribute('data-bg', nextSlide)
    })

  }

  this.init = function (wrap, mobile, withDecore, changeBG, customOptions) {

    if (customOptions) {
      for (var key in customOptions) {
        if (customOptions.hasOwnProperty(key)) {
          this.settings[key] = customOptions[key]
        }
      }
    }

    changeBG ? this.changeBG(wrap, changeBG) : false
    mobile ? this.mobileSlider(wrap) : $(wrap).slick(this.settings);
    withDecore ? this.decorated(wrap, withDecore) : false;

  }

}

$('.scrollToForm').on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({scrollTop: $('form').offset().top - 150}, 700)
})

var labels = document.querySelectorAll('label');
var inputs = document.querySelectorAll('input');

for (var k = 0, max = labels.length; k < max; k++) {
  inputs[k].addEventListener('change', checkLabels)
}

function checkLabels(event) {
  var id = event.target.getAttribute('id')
  for (var l = 0, max = labels.length; l < max; l++) {
    labels[l].getAttribute('for') === id
      ? event.target.value
      ? labels[l].setAttribute('data-full', '')
      : labels[l].removeAttribute('data-full')
      : false

  }
}

function horizontalScroll(elem) {
  var element = document.querySelector(elem),
    elementPos = element.getBoundingClientRect().top,
    scrollValue = Math.round((winHeigth - elementPos) / 2.5)

  elementPos < winHeigth && (elementPos * (-1)) <= element.clientHeight
    ? element.style.transform = 'translateX(-' + scrollValue + 'px)'
    : false
}

function scrollEffects() {
  var container = document.querySelector('.reviews'),
    decore = document.querySelector('.reviews__decore'),
    elements = container.querySelectorAll('.reviews__item');

  if (container.getBoundingClientRect().top < winHeigth / 1.6) {
    for (var e = 0, eMax = elements.length; e < eMax; e++) {
      elements[e].getBoundingClientRect().top < (winHeigth / 1.1)
        ? elements[e].setAttribute('data-show', '')
        : elements[e].removeAttribute('data-show');
    }
    decore.setAttribute('data-insight', '');
  } else {
    decore.removeAttribute('data-insight');
  }
}

function mouseParallax() {
  var containers = document.querySelectorAll('[data-parallax]');

  var returnVisibleContainer = function () {
    for (var p = 0, max = containers.length; p < max; p++) {

      var containerPosition = containers[p].getBoundingClientRect().top,
        containerHeight = containers[p].offsetHeight;

      if (containerPosition / 1.3 < containerHeight && containerPosition > (containerHeight * (-1))) {
        return containers[p];
      }

    }
  }

  var move = function (wrapper) {

    if (wrapper) {
      var parallaxItems = wrapper.querySelectorAll('[data-parallax-item]');

      for (var i = 0, max = parallaxItems.length; i < max; i++) {
        var elementValue = parallaxItems[i].getAttribute('data-parallax-item'),
          coordsX = Math.round(elementValue * ((event.screenX - winWidth / 2) / 10)),
          coordsY = Math.round(elementValue * ((event.screenY - winHeigth / 2) / 10)),
          rotateValue = (coordsY + coordsX) / 5;

        parallaxItems[i].style.transform = 'translate(' + coordsX + 'px, ' + coordsY + 'px) rotate(' + rotateValue + 'deg)'
        parallaxItems[i].style.WebkitTransform = 'translate(' + coordsX + 'px, ' + coordsY + 'px) rotate(' + rotateValue + 'deg)'
        parallaxItems[i].style.MsTransform = 'translate(' + coordsX + 'px, ' + coordsY + 'px) rotate(' + rotateValue + 'deg)'

      }
    }

  }

  if(returnVisibleContainer()) {
    document.addEventListener('mousemove', function () {
      move(returnVisibleContainer())
    })
  } else {
    document.removeEventListener('mousemove', function () {
      move(returnVisibleContainer())
    })
  }

  document.addEventListener('scroll', function () {
    returnVisibleContainer();
    move(returnVisibleContainer())
  })



}

function toggleCase() {
  var reviewsButtons = document.querySelectorAll('[data-reviews-open]'),
    targets = document.querySelectorAll('.reviews__case'),
    inners = document.querySelectorAll('[data-height]');

  for (var t = 0, tMax = reviewsButtons.length; t < tMax; t++) {
    reviewsButtons[t].addEventListener('click', function () {
      var id = this.getAttribute('data-reviews-open');

      !this.hasAttribute('style')
        ? this.style.transform = 'scale(1, -1)'
        : this.removeAttribute('style');

      !targets[id].hasAttribute('data-open')
        ? targets[id].setAttribute('data-open', '')
        : targets[id].removeAttribute('data-open');

      targets[id].hasAttribute('style')
        ? targets[id].removeAttribute('style')
        : targets[id].style.height = inners[id].offsetHeight + 'px';

    })
  }

}
