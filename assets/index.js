$(document).ready(function(){

    //BG Hover animation
    $(window).on('mousemove', function(event) {
        const blueCircle = $('.circle.blue');
        const orangeCircle = $('.circle.orange');
        
        const x = (window.innerWidth - event.clientX)/2;
        const y = (window.innerHeight - event.clientY)/2;

        blueCircle.css('transform', `translateX(${x}px) translateY(${y}px) skew(70deg, 78deg)`);
        orangeCircle.css('transform', `translateX(${x}px) translateY(${y}px) skew(70deg, 78deg)`);
    });

    //Nav scroll
    // $("#volunteer_btn").on('click', function() {
    //     if (window.location.href.includes('about')) {
    //         pushStateAndDoSomething({state: {}, title: 'home', url: '/'}, () => {
    //             $([document.documentElement, document.body]).animate({
    //                 scrollTop: $("#volunteer").offset().top - 175
    //             }, 500);
    //         });
    //         // window.location.href = '/';
    //     } else {
    //         $([document.documentElement, document.body]).animate({
    //             scrollTop: $("#volunteer").offset().top - 175
    //         }, 500);
    //     }
    // });

    // $("#assistance_btn").on('click', function() {
    //     $([document.documentElement, document.body]).animate({
    //         scrollTop: $("#assistance").offset().top - 175
    //     }, 500);
    // });

    // $("#donate_btn").on('click', function() {
    //     $([document.documentElement, document.body]).animate({
    //         scrollTop: document.body.scrollHeight
    //     }, 500);
    // });

    $(window).on('scroll', function() {
        //Neighbors scroll animation
        $.each($('#neighbors_ticker .item'), (i, value) => {
            $(value).css('transform', `translateX(-${window.pageYOffset}px) translateY(0)`);
        })

        //Shrink logo on scroll
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            $('#logo_main').removeClass('active');
            $('#logo_hands').addClass('active');
            $('#logo_container').addClass('scrolled');

        } else {
            $('#logo_hands').removeClass('active');
            $('#logo_main').addClass('active');
            $('#logo_container').removeClass('scrolled');
        }
    });

    //Picture carousel
    $('#pics_carousel').owlCarousel({
        loop:true,
        lazyLoad:true,
        margin:10,
        responsiveClass:true,
        nav: false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:3,
                loop:false
            }
        }
    });

    //Testimony Carousel
    $('#testimony_carousel').owlCarousel({
        items: 1,
        nav: false,
        loop: true,
        center: true,
        startPosition: 1,
        stagePadding: 0,
        dots: true,
        responsive:{
            1024:{
                stagePadding: 325,
                dots: false
            }
        }
    });

    //English/Spanish toggle
    $('.eng.lang-btn').on('click', () => {
        $('.span.lang-btn').removeClass('active');
        $('.lang-btn.eng').addClass('active');
        
        $('.lang-text.span').removeClass('active');
        $('.lang-text.eng').addClass('active');
    });

    $('.span.lang-btn').on('click', () => {
        $('.lang-btn.eng').removeClass('active');
        $('.span.lang-btn').addClass('active');

        $('.lang-text.eng').removeClass('active');
        $('.lang-text.span').addClass('active');
    });

});