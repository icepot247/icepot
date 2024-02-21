jQuery(document).ready(function($) {
	$('.scroll').click(function() {
	     var $form = $("#orderform").offset().top;
	     $("html, body").animate({scrollTop : $form}, 666);
	     return false;
	     });
})
    $(".lightSlider").lightSlider({
        item: 1,
        mode: 'fade',
        pager: false,
        prevHtml: '<span class="custom-prev-html"></span>',
        nextHtml: '<span class="custom-next-html"></span>',
        enableDrag: true,
        loop: true
    });