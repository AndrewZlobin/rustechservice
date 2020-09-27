$(document).ready(function () {
    $('.bull-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.bull-slider-nav',
    });
    $('.bull-slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.bull-slider-for',
        dots: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
        ]
    });
});

$('.bull-top__burger').click(function () {
    $(this).toggleClass('change');
    if ($(this).hasClass('change')) {
        $('.bull-top').addClass('bull-top__menu-open');
        $('.bull-top__nav-mobile').removeClass('d-none');
    } else {
        $('.bull-top').removeClass('bull-top__menu-open');
        $('.bull-top__nav-mobile').addClass('d-none');
    }
});