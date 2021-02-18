$(document).ready(function(){
    $('.fourth-container__slick-slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        autoplaySpeed: 4000,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                settings:"unslick",
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                settings:"unslick",
            }
        }]
    }); 
});

