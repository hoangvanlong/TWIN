$(function() {
    $('.twin-gb-3 .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider-nav',
        autoplay: true
    });
    $('.twin-gb-3 .slider-nav').slick({
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 7,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
})