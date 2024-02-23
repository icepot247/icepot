function circles() {
    $('.sec1__face-item-trigger').on('click touch', function () {
        $('.sec1__face-item-trigger').html('+');
        $('.sec1__face-item-text').fadeOut();
        $(this).next('.sec1__face-item-text').fadeIn();
        $(this).html('-');
    });
     $('.tubes__btn').on('click touch', function () {
        if ($(this).hasClass('active')) {
            $('.tubes__btn').removeClass('active');
        } else {
            $('.tubes__btn').removeClass('active');
            $(this).addClass('active');
        }
    });
};

function toform() {
    $('.pre_toform').on('click touch', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('form').offset().top
        }, 500);
    });
}

function result() {
    $('.btn--age').on('click touch', function (e) {
        var realAge = Number($('#questions__age').val());
        if (realAge) {
            $('.sec5').addClass('smaller-padding');
            $('#questions__age').removeClass('age-error');
            $('.result__title-age').html(realAge + 15);
            $('.result').slideDown();
            $('html, body').animate({
                scrollTop: $('.result').offset().top
            }, 500);
        } else {
            $('#questions__age').addClass('age-error');
        }
    });
}

$(function () {
    result();
    toform();
    circles();
    $('.components__list').slick({
        slidesToShow: 2,
        adaptiveHeight: false,
        autolplay: true,

        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    var flag = 0;
    if (window.innerWidth <= 991 && flag === 0) {
        flag = 1;
        $('.reviews__list').slick();
    };
    $(window).on('resize', function (event) {
        if (event.target.innerWidth <= 991 && flag === 0) {
            flag = 1;
            $('.reviews__list').slick();
        } else if (event.target.innerWidth > 991 && flag === 1) {
            flag = 0;
            $('.reviews__list').slick('unslick');
        }
    });
})