(function ($) {
	"use strict";

	 $(window).on('load', function(){
        // Prealoder
        $("#preloader").delay(500).fadeOut();
    });
    	// owlCarousel
	$('.hero-active').owlCarousel({
		loop: true,
		margin: 0,
		items: 1,
		nav: false,
        autoplay:true,
        animateOut: 'fadeOut',
        smartSpeed:1000,
		dots: false,
	})
	 // swipper initialize
	 var swiper = new Swiper(".seeAppSwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: false,
        },
         // Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
      });

	$('.video-popup').magnificPopup({type:'iframe'});



    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });

    //Animate the scroll to top
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

})(jQuery);