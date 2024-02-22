
$(document).ready(function(){
    $('.bxslider').bxSlider({
        auto: true,
        infiniteLoop: true
    });

    $('.toform').click(function(){
        $("html, body").animate({scrollTop: $("form").offset().top}, 1500);
        return false;
    });

});