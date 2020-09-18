$(document).ready(function(){
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

    $('#testimony_carousel').owlCarousel({
        items: 1,
        nav: false,
        loop: true,
        center: true,
        stagePadding: 295,
        startPosition: 1,
        dots: false,
        responsive:{
            0:{
                stagePadding: 0
            },
            600:{
                stagePadding: 0
            },
            1000:{
                stagePadding: 295
            }
        }
    });
});