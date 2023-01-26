$(document).ready(function () {
	var owl = $('.skills-container');
	owl.owlCarousel({
		loop: true,
		margin: 5,
		nav: true,
		responsive: {
			0:{
				items: 1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})
	//Custom button
	$('.nextBtn').click(function(){
		owl.trigger('next.owl.carousel');
	});
	$('.prevBtn').click(function(){
		owl.trigger('prev.owl.carousel');
	});
});

