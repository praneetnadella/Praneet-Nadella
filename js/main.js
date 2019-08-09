(function ($) {
	"use strict";
	var nav = $('nav');
  	var navHeight = nav.outerHeight();
  
	$('.navbar-toggler').on('click', function() {
		if( ! $('#mainNav').hasClass('navbar-reduce')) {
		$('#mainNav').addClass('navbar-reduce');
		}
	})

	// Loader
	$(window).on('load', function () {
		if ($('#loader').length) {
		$('#loader').delay(75).fadeOut('slow', function () {
			$(this).remove();
		});
		}
	});

	// Back to top button
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
		$('.back-to-top').fadeIn('slow');
		} else {
		$('.back-to-top').fadeOut('slow');
		}
	});
	$('.back-to-top').click(function(){
		$('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
		return false;
	});

	//Scroll to Top
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	//Goes to locaiton
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	//Closes responsive nav when link clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activates scrollspy
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});

	//Shrinks Navbar
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	//Typing Effect
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 50,
			loop: true,
			backDelay: 1200,
			backSpeed: 40,
			//smartBackspace: true,
		});
	}

	//Progress Bar
    $('.more-skill').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $('.chart').easyPieChart({
                easing: 'easeOut',
                delay: 3000,
                barColor:'#FF9000',
                trackColor:'rgba(255,255,255,0.2)',
                scaleColor: false,
                lineWidth: 8,
                size: 140,
                animate: 2000,
                onStep: function(from, to, percent) {
                    this.el.children[0].innerHTML = Math.round(percent);
                }
            });
            $(this).unbind('inview');
        }
	});

	(function () {
        new WOW({
            mobile:  false
        }).init();
	}());
	

})(jQuery);

// $(document).ready(function () {
// 	$('#send').submit(function (e) {
// 	  e.preventDefault();
// 	  $.post("contact.php").complete();
// 	});
// });