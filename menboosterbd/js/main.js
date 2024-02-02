//to center the order form and privacy policy and agreement page
function resiz() {
  var mbw = $(".modal-block").width(),
      mbh = $('#kmacb-form').find(".modal-block").height(),
      mbfw = $('#kmacb-form').find(".modal-block").width(),
      ml = Number(mbw) / 2,
      wl = Number(mbfw) / 2,
      hl = Number(mbh) / 2
  $('#polit').find('.modal-block').css('margin-left', '-' + ml + 'px')
  $('#agreement').find('.modal-block').css('margin-left', '-' + ml + 'px')
}
//to center the order form and privacy policy and agreement page

//prevents form from opening more than 1 time when mouse leave window
function modalForm() {
  if (sessionStorage.getItem('modalform') == null) {
    $("#kmacb-form").css('display', 'block')
    $("#kmacb-form").find(".modal-block").addClass("modal-top modal-left")
    sessionStorage.setItem('modalform', '')
  }
}
//prevents form from opening more than 1 time when mouse leave window

//open form when click on operator
function modalForm2() {
  $("#kmacb-form").css('display', 'block')
  $("#kmacb-form").find(".modal-block").addClass("modal-top modal-left")
  sessionStorage.setItem('modalform', '')
}
//open form when click on operator

resiz()

//open privat policy and agreement on click
$(".polbtn").click(function() {
  var pcl = $(this).attr('data-inf')

  $(".modal" + pcl).css("display", "block")
  $("body").css("overflow", "hidden")
  $(".modal" + pcl).find(".modal-block").addClass('margin-t-b')
  $(".modal" + pcl).find(".modal-block").addClass('modal-left')
})
//open privat policy and agreement on click

//close popup windows when click close icon
$(".icon-close").click(function() {
  var pcl = $(this).attr('data-inf')

  $(".modal" + pcl).css("display", "none")
  $("body").css("overflow", "visible")
})

$(".modalBg").click(function() {
  var pcl = $(this).attr('data-inf')

  $(".modal" + pcl).css("display", "none")
  $("body").css("overflow", "visible")
})
//close popup windows when click close icon

$("#kmacb").click(function(){
  modalForm2()
})

window.onresize = function() {
  resiz()
}

if ($(window).width() > 991) {
  setTimeout(function(){
    $("#kmacb").css("display","block")//disable open operator popup if window less than 992
  },15000)

  //operators image randomizer
  var operator = ['kmacb__manager-man1', 'kmacb__manager-man2', 'kmacb__manager-man3', 'kmacb__manager-woman1', 'kmacb__manager-woman2', 'kmacb__manager-woman3'],
      number = 1 + Math.floor(Math.random() * 5);

  $(".kmacb__manager-img").addClass(operator[number])
  //operators image randomizer

  $("body").mouseleave(function(){
    modalForm()//disable open popup form when mouseleave window if window less than 992
  })
}

//smooth scroll to form
$(".btnlink").on("click", function () {
    return $("html, body").animate({
        scrollTop: $("#orderForm").offset().top
    }, 700), !1
});
//smooth scroll to form
