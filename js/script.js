$(document).ready(function(){

   $('.slider').slick({
    arrows:false,
    dots: true,
  speed:500,
  easing:'ease',
  infinite:false,
autoplay:true,
autoplaySpeed:2000,
pauseOnFocus:true,
pauseOnHover:true,
pauseOnDotsHover:true,
   });

   $(".top-slider").slick({
      arrows: false,
      speed: 500,
      easing: "ease",
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1000,
      pauseOnFocus: true,
      pauseOnHover: true,
   });
})

