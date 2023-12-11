$('.hover-item').on('click',function(){
   let attr = $(this).attr('data-target')
   $(attr).show();
})
$('.graph__item-close-btn').on('click',function(){
   $(".graph__content-item").hide();
})

$(document).click(function (e) {
        if ($(e.target).closest(".graph__content-container").length === 0) {
            $(".graph__content-item").hide();
        }
});

$(window).scroll(function(){
    if(window.innerWidth > 993)
   if ($(window).scrollTop() >= 10) {
       $('.header').addClass('active');
   }
   else {
       $('.header').removeClass('active');
   }
});