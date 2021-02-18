$('.menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    $('.section__one-header').toggleClass('section__one-header_active');
});