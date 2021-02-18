$(document).ready(function(){
    $('.fourth-container__slick-slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 4000
    });
});

$(document).ready(function(){
    $('.first-container__block').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
    });
});