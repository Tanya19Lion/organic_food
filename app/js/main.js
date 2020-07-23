$(function(){

    $('.clients__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });

    let block = $("#progress__inner");
    let blockStatus = true;
    $(window).scroll(function() {
        let scrollEvent = ($(window).scrollTop() > (block.position().top - $(window).height()));
        if (scrollEvent && blockStatus) { 
            blockStatus = false;
            
            $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    });

    new WOW().init();

    $('.header__mobile').on('click', function() {
        $('.header__nav').slideToggle();
    });

});



