$(function () {
    $('.btn, .btn_bl3').on('click touchstart', function (e) {

        $("html, body").animate({scrollTop: $('.form').offset().top}, 700);

    });
});
