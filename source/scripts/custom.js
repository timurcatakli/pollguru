$(document).ready(function() {
	
	'use strict';
	
	/* ==== Preloader ==== */
	$('.spinner').fadeOut('slow');
	$('.preloader').delay(350).fadeOut();
	
	/* ==== Screenshots Carousel ==== */
	$('#screen-carousel').owlCarousel({
    	items : 4,
    	autoPlay : 4000,
		pagination:true
	});
	
	/* ==== Testimonials Carousel ==== */
	$('#testimonials-carousel').owlCarousel({
    	singleItem: true,
    	transitionStyle : 'fadeUp',
    	autoPlay : 4000,
		pagination:true
	});
	
	/* ==== Scroll link ==== */
	$.localScroll.hash();
	$('.navigation').localScroll({
		target: 'body',
		queue: true,
		duration: 1000,
		hash: false,
		offset: -60,
		easing: 'easeInOutExpo'
	});
	
	/* ==== Numbers ==== */
	$('.statistic').appear(function() {
        $('.timer').countTo({
            speed: 4000,
            refreshInterval: 60,
            formatter: function (value, options) {
                return value.toFixed(options.decimals);
            }
        });
    });
	
	/* ==== Boxer ==== */
	$('.boxer').boxer();
	
	/* ==== Buttons ==== */
	var taint, d, x, y;
	$('.btn-site').click(function(e){
		if ($(this).find('.taint').length == 0) {
			$(this).prepend('<span class="taint"></span>')
		}
		taint = $(this).find('.taint');
		taint.removeClass('drop');
		if(!taint.height() && !taint.width()) {
			d = Math.max($(this).outerWidth(), $(this).outerHeight());
		taint.css({height: d, width: d});
		}
		x = e.pageX - $(this).offset().left - taint.width()/2;
		y = e.pageY - $(this).offset().top - taint.height()/2;
		taint.css({top: y+'px', left: x+'px'}).addClass('drop');
	});
	
	/* ==== Button toggle ==== */
	$('.toggle-nav').click(function(){
		$('.menu').toggleClass('open');
	});
	
	/* ==== Event Target ==== */
	$('body').click(function(event){
		if ($(event.target).closest('.menu, .toggle-nav-wrapper').length) return;
		$('.menu').removeClass('open');
		event.stopPropagation();	
	});

});