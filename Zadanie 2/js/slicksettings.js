$('.team-carousel').slick({
	arrows: false,
	autoplay: true,
	mobileFirst: true,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
    pauseOnHover: false,
	responsive: [
		{
			breakpoint: 576,
			settings: { 
                slidesToShow: 2,
            }
		},
		{
			breakpoint: 992,
			settings: { 
                slidesToShow: 3,
            },
		}
	],
})
