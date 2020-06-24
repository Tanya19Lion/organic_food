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


//modal
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


//timer
const getTimeRemaining = (endtime) => {
    const time = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((time / 1000) % 60);
        minutes = Math.floor((time / 1000 / 60) % 60),
        hours = Math.floor((time / (1000 * 60 * 60)) % 24),
        days = Math.floor((time / (1000 * 60 *60 *24)));
    
    return {
        'total': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
};

const addZero = (num) => {
    if (num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
};

const setClock = (selector, endtime) => {
    const timer = document.querySelector('.timer__block'),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const t = getTimeRemaining(endtime);

        days.textContent = addZero(t.days);
        hours.textContent = addZero(t.hours);
        minutes.textContent = addZero(t.minutes);
        seconds.textContent = addZero(t.seconds);

        if (t.total <= 0) {
            days.textContent = '00';
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';

            clearInterval(timeInterval);
        }
    }
};



setClock('.timer__block', '2020-06-30');