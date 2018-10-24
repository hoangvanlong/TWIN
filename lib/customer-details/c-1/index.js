$(document).ready(function() {
    $('.canhcam-slider-4 .top .owl-carousel').owlCarousel({
        loop: false,
        dots: false,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            }
        }
    })
    $('.canhcam-slider-4 .bottom .owl-carousel').owlCarousel({
        loop: true,
        dots: false,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    })
})