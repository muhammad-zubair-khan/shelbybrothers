
	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	


// ....................................................
(function ($) {
	"use strict";
   $(document).ready(function($){

    // tooltip
    $('[data-toggle="tooltip"]').tooltip()

			 // Sticky Menu
			$('.js--sticky-menu').waypoint(function(direction){
			   if(direction == 'down'){
			         $('.header-area').addClass('sticky');
			      } else {
			         $('.header-area').removeClass('sticky');
			   }
            });
            // Active Menu Color
            $('.main-menu li').on('click', function(){
                $('.main-menu li').removeClass('active');
                $(this).addClass('active');
            });

            

            // Search Trigger
            $('.search-trigger').on('click', function(){
                $('#search-modal').addClass('show');
                $('.search-overlay').addClass('show');
            });
            $('.search-overlay').on('click', function(){
                $(this).removeClass('show');
                $('#search-modal').removeClass('show');
            });
            // Search Trigger

      // Start Slider Carousel
      $('.slider-carousel').owlCarousel({
         items: 1,
         loop: true,
         dots: true,
         thumbs: false,
         nav: true,
         navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
         autoplay: true,
				 autoplayTimeout:3000,
             autoplayHoverPause:true,
        
      });
      // End Slider Carousel

      // Start Project Carousel
      $('.project-carousel').owlCarousel({
         loop: true,
         dots: false,
         thumbs: false,
         nav: true,
         navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
         autoplay: false,
				 autoplayTimeout:1000,
    		 autoplayHoverPause:true,
         responsive: {
            0:{
                items:1
            },
            767:{
                items: 2
            },
            992:{
                items: 4
            },
        },
      });
      // End Project Carousel //
      // Start Carousel Area
      $('.blog-carousel, .testimonial-carousel').owlCarousel({
         items: 1,
         loop: true,
         dots: false,
         thumbs: false,
         nav: true,
         navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
         autoplay: true,
				 autoplayTimeout:3000,
    		 autoplayHoverPause:true,
      });
      // End Carousel Area //
      // Start Brand Carousel
      $('.brand-carousel').owlCarousel({
         loop: true,
         dots: false,
         thumbs: false,
         autoplay: true,
				 autoplayTimeout:4000,
    		 autoplayHoverPause:true,
         responsive: {
            0:{
                items:2
            },
            768:{
                items: 3
            },
            992:{
                items: 6
            },
        },
      });
      // End Brand Carousel

       // Start Slick Nav
   $('#mobile-menu').slicknav({
    prependTo: '.show-mobile-menu',
    allowParentLinks: true
 });
 // End Slick Nav

//  Scroll Up
$.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
//   Scroll Up

//   Magnific Popup
$(".video-play").magnificPopup({
    type: 'iframe',
});
//   End  Magnific Popup

// Smooth Scroll for IE/ EDGE/ SAFARI
$('a').on('click', function(event){
    if (this.hash !==''){
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
            window.location.hash = hash;
        });
    }
});
// End Smooth Scroll for IE/ EDGE/ SAFARI

});

})(jQuery);
// ______________________________________--------------------------> Search Bar 
let searchBar = document.forms[0];
searchBar.addEventListener('keyup', function(e) {
	let term = searchBar.querySelector("input").value.toLowerCase();
	let movies = document.querySelectorAll(".title");
	movies.forEach(movie => {
		if (movie.textContent.toLowerCase().indexOf(term) != -1) {
			// document.querySelector('#movie-list').style.display = 'block';
      movie.parentElement.style.display = "flex";
		} else  {
			movie.parentElement.style.display = "none";
		}
	});
});
function myFunction() {
  var x = document.getElementById("movie-list");
  var y =  document.getElementById("list-wrapper")
  x.style.display = "block";
  y.style.height = "50px";

}
function hideFunction(){
  var x = document.getElementById("movie-list");
  x.style.display = "none";
}
// ______________________________________--------------------------> Search Bar End