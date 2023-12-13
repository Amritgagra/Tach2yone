$('.hover-item ,.hover-icon--mobile').on('click',function(){
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
    if(window.innerWidth > 993) {
      if ($(window).scrollTop() >= 10) {
          $('.header').addClass('active');
      }
      else {
          $('.header').removeClass('active');
      }
    }
});

$(document).ready(function() {
    $(".openModalBtn").click(function() {   
      $("#overlay, #modal").fadeIn();
      $("body").addClass('overflow-hidden');
    });

    $(".closeBtn, #overlay").click(function() {
      $("#overlay, #modal").fadeOut();
      $("body").removeClass('overflow-hidden');
    });
  });
    function modalWidth() {
        let val =  $('.container').width();
        $('#modal').css({
            "maxWidth":`${val}px`
        })
    }
    modalWidth()
  $(window).resize(function(){
    modalWidth()
  });
let target = document.querySelector(".about-team");

if (target) {
  let observer = new IntersectionObserver(entries => {
    function counter(id, start, end, duration) {
      let obj = document.querySelector(id),
       current = start,
       range = end - start,
       increment = end > start ? 1 : -1,
       step = Math.abs(Math.floor(duration / range)),
       timer = setInterval(() => {
        current += increment;
        obj.textContent = `${current}+`;
        if (current == end) {
         clearInterval(timer);
        }
       }, step);
     }
    counter(".counter1", 0, 20, 3000);
    counter(".counter2", 0, 50, 3000);
    counter(".counter3", 0, 100, 3000);
    counter(".counter4", 0, 20, 3000);
 });
 
 observer.observe(target);

}
