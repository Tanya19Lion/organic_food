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

});

const headerBtn = document.querySelector('.header__btn');
const modal = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup__close');
const scroll = calcScroll();

headerBtn.addEventListener('click', (event) => {

    if (event.target) {
        event.preventDefault();
    }

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = `${scroll}px`;

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
    });

});

function calcScroll() {
    let div = document.createElement('div');

    div.style.width= '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}
