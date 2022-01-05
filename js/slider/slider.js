$(document).ready(function() {
    //movie slider
    $('#movie-slider').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        smartSpeed: 1000,
    });

    //shows slider
    $('#shows-slider').owlCarousel ({
        nav: true,
        responsiveClass: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                loop: true,
                nav: false,
                dots: false,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                smartSpeed: 1000,

            },
            600: {
                items: 2,
                loop: true,
                nav: false,
                dots: false,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                smartSpeed: 1000,
            },
            739: {
                items: 2,
                loop: true,
                nav: false,
                dots: false,     
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                smartSpeed: 1000,

            },
            1023: {
                items: 3,
                loop: true,
                nav: false,
                dots: false,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                smartSpeed: 1000,
            },
            1200: {
                items: 4,
                loop: true,
                nav: false,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                smartSpeed: 1000,
            }
        }
    })
});