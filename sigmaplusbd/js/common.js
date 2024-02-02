$(document).ready(function() {
    $('.review-slider').slick({
        arrows: true,
        dots: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    if (window.innerWidth > 991) {
        // Accepts the id of the container, and the classname that all three elements share
        var ThreeDCarousel = function(el, classname) {
            var element = document.getElementById(el);
            var items = element.getElementsByClassName(classname);
            var classNames = ['two', 'three', 'one'];
            if (items.length !== 3) {
                alert('ThreeDCarousel only supports 3 items.');
                return false;
            } else {
                for (var i = 0; i < 3; i++) {
                    items[i].className += " " + classNames[i];
                }
            }

            var obj = {
                element: element,
                items: items,
                prev: function() {
                    var l = this.element.getElementsByClassName('one')[0],
                        c = this.element.getElementsByClassName('two')[0],
                        r = this.element.getElementsByClassName('three')[0];
                    l.classList.remove('one');
                    l.classList.add('two');
                    c.classList.remove('two');
                    c.classList.add('three');
                    r.classList.remove('three');
                    r.classList.add('one');
                },
                next: function() {
                    var l = this.element.getElementsByClassName('one')[0],
                        c = this.element.getElementsByClassName('two')[0],
                        r = this.element.getElementsByClassName('three')[0];
                    l.classList.remove('one');
                    l.classList.add('three');
                    c.classList.remove('two');
                    c.classList.add('one');
                    r.classList.remove('three');
                    r.classList.add('two');
                }
            };
            return obj;
        };

        var carousel = new ThreeDCarousel('carousel', 'item');

        var auto = setInterval(function() { carousel.next(); }, 4000);
    };



    var flag = 0;
    if (window.innerWidth <= 991 && flag === 0) {
        flag = 1;
        $('#carousel').slick({
            infinite: true,
            slidesToShow: 1,
            arrows: false,
            dots: true,
            fade: true,
            autoplay: true,
            autoplaySpeed: 3000,
        });

    };
    $(window).on('resize', function (event) {
        if (event.target.innerWidth <= 991 && flag === 0) {
            flag = 1;
            $('#carousel').slick({
                infinite: true,
                slidesToShow: 1,
                arrows: false,
                dots: true,
                fade: true,
                autoplay: true,
                autoplaySpeed: 3000,
            });

        }
        else if (event.target.innerWidth > 991 && flag === 1) {
            flag = 0;
            $('#carousel').slick('unslick');
        }
    });


    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       false,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: "meterage",    // optional scroll container selector, otherwise use window,
            resetAnimation: true,     // reset animation on end (default is true)
        }
    );
    wow.init();

});
$(document).ready(function() {
    $('.pre_toform').click(function (evt) {
        evt.preventDefault();
        $("html, body").animate({scrollTop: $('#order_form').offset().top}, 1000);
        return false;
    });
});