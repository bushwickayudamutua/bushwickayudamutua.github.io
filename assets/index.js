$(document).ready(function () {

    const setSpanish = function () {
        localStorage.setItem('lang', 'span');
        $('.lang-btn.eng').removeClass('active');
        $('.span.lang-btn').addClass('active');

        $('.lang-text.eng').removeClass('active');
        $('.lang-text.span').addClass('active');
    }

    const setEnglish = function () {
        localStorage.setItem('lang', 'eng');
        $('.span.lang-btn').removeClass('active');
        $('.lang-btn.eng').addClass('active');

        $('.lang-text.span').removeClass('active');
        $('.lang-text.eng').addClass('active');
    };

    const getDefaultLanguage = function () {
        // determine default language from navigator.languages
        return navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage);
    }

    // set language based on local storage / navigator.language(s)
    if (localStorage.getItem('lang') !== null) {
        if (localStorage.getItem('lang') === 'span') {
            // set spanish
            setSpanish();
        }
        else if (localStorage.getItem('lang') == 'eng') {
            // set english
            setEnglish();
        }
    } else {
        const defaultLanguage = getDefaultLanguage();
        if (defaultLanguage.startsWith('es')) {
            // set spanish
            setSpanish();
        } else {
            // set english
            setEnglish();
        }
    }

    // populate requests counter on homepage by fetching data from a JSON file on Digital Ocean Spaces.
    const openRequestsURL = "https://file.baml.ink/website-data/open-requests.json";
    var openRequestsDiv = document.getElementById("requests-counter-container");
    if (openRequestsDiv != null) {
        $.getJSON(openRequestsURL, function (data) {
            var metrics = data.metrics;
            var nMetrics = metrics.length;
            var half = Math.ceil(nMetrics / 2);
            var firstHalf = metrics.slice(0, half);
            var secondHalf = metrics.slice(half, nMetrics);
            var halves = [firstHalf, secondHalf];
            var html = '';
            $.each(halves, function (key, half) {
                html += '<div class="request-column">';
                for (var i = 0; i < half.length; i++) {
                    var request = half[i];
                    html += "<div class='request-entry'>";
                    html += "<h2 style='display: inline;' class='request-count'>" + request.value + " </h2>";
                    if (localStorage.getItem('lang') === 'span') {
                        html += "<span class='span request-category lang-text active'>para  " + request.translations.span + "</span>";
                        html += "<span class='eng request-category lang-text'>for  " + request.translations.eng + "</span>";
                    } else {
                        html += "<span class='span request-category lang-text'>para  " + request.translations.span + "</span>";
                        html += "<span class='eng request-category lang-text active'>for  " + request.translations.eng + "</span>";
                    }
                    html += "</div>";
                }
                html += "</div>";
            });
            openRequestsDiv.innerHTML = html;
        });
    };

    // populate requests counter on homepage by fetching data from a JSON file on Digital Ocean Spaces.
    const fulfilledRequestsURL = "https://file.baml.ink/website-data/fulfilled-requests.json";
    var fulfilledRequestsDiv = document.getElementById("fulfilled-requests-counter-container");
    if (fulfilledRequestsDiv != null) {
        $.getJSON(fulfilledRequestsURL, function (data) {
            var metrics = data.metrics;
            var nMetrics = metrics.length;
            var half = Math.ceil(nMetrics / 2);
            var firstHalf = metrics.slice(0, half);
            var secondHalf = metrics.slice(half, nMetrics);
            var halves = [firstHalf, secondHalf];
            var html = '';
            $.each(halves, function (key, half) {
                html += '<div class="request-column">';
                for (var i = 0; i < half.length; i++) {
                    var request = half[i];
                    html += "<div class='request-entry'>";
                    html += "<h2 style='display: inline;' class='request-count'>" + request.value + " </h2>";
                    if (localStorage.getItem('lang') === 'span') {
                        html += "<span class='span request-category lang-text active'> " + request.translations.span + "</span>";
                        html += "<span class='eng request-category lang-text'>  " + request.translations.eng + "</span>";
                    } else {
                        html += "<span class='span request-category lang-text'> " + request.translations.span + "</span>";
                        html += "<span class='eng request-category lang-text active'>  " + request.translations.eng + "</span>";
                    }
                    html += "</div>";
                }
                html += "</div>";
            });
            fulfilledRequestsDiv.innerHTML = html;
        });
    };

    var imgPromises = [];
    $('#pics_carousel .img-outer-container img').each(function () {
        const elem = $(this);
        const img = new Image();
        const src = elem.data('src');
        const p = new Promise((resolve, reject) => {
            img.onload = function () {
                elem.attr('src', this.src);
                resolve();
            };
        });
        imgPromises.push(p);

        img.src = src;
    });
    Promise.all(imgPromises).then(() => {
        $('#pics_spinner').css('display', 'none');
        $('#pics_carousel').css('display', 'block');
    });

    //BG Hover animation
    // $(window).on('mousemove', function(event) {
    //     const blueCircle = $('.circle.blue');
    //     const orangeCircle = $('.circle.orange');

    //     const x = (window.innerWidth - event.clientX)/10;
    //     const y = (window.innerHeight - event.clientY)/10;

    //     blueCircle.css('transform', `translateX(${x}px) translateY(${y}px) skew(70deg, 78deg)`);
    //     orangeCircle.css('transform', `translateX(${x}px) translateY(${y}px) skew(70deg, 78deg)`);
    //     // blueCircle.css('transform', `translateX(${x*.2}px) translateY(${y*.2}px) skew(25deg, -25deg)`);
    //     // orangeCircle.css('transform', `translateX(${x*.2}px) translateY(${y*.2}px) skew(25deg, -25deg)`);
    // });

    $(window).on('scroll', function () {
        //Neighbors scroll animation
        $.each($('#neighbors_ticker .item'), (i, value) => {
            $(value).css('transform', `translateX(-${window.pageYOffset}px) translateY(0)`);
        })

        //Shrink logo on scroll
        // if (document.body.scrollTop > 0) {
        //     $('#logo_main').removeClass('active');
        //     $('#logo_hands').addClass('active');
        //     $('#logo_container').addClass('scrolled');
        //     $('nav').addClass('scrolled');

        // } else {
        //     $('#logo_hands').removeClass('active');
        //     $('#logo_main').addClass('active');
        //     $('#logo_container').removeClass('scrolled');
        //     $('nav').removeClass('scrolled');
        // }
    });

    //Picture carousel
    $('#pics_carousel').owlCarousel({
        loop: true,
        lazyLoad: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        autoHeight: true,
        navText: ["<img src='./assets/images/left.svg'>", "<img src='./assets/images/right.svg'>"],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                autoHeight: false,
                items: 3,
            },
            1000: {
                autoHeight: false,
                items: 3,
                loop: false
            }
        }
    });

    //Testimony Carousel
    $('#testimony_carousel').owlCarousel({
        items: 1,
        nav: true,
        navText: ["<img src='./assets/images/left.svg'>", "<img src='./assets/images/right.svg'>"],
        loop: true,
        center: true,
        startPosition: 1,
        dots: true,
        autoHeight: false,
        responsive: {
            1600: {
                stagePadding: 325
            }
        }
    });

    //About collapse show/hide minus/plus buttons
    $('.about-content').on('show.bs.collapse', function () {
        $('.about-content').each(function () {
            $(this).collapse('hide');
        });
    });

    //English/Spanish toggle
    $('.eng.lang-btn').on('click', () => {
        setEnglish();
    });

    $('.span.lang-btn').on('click', () => {
        setSpanish();
    });

    //Nav dropdown
    $('.nav-dropdown').on('mouseover', () => {
        $('.nav-dropdown__menu').addClass('active');
    });
    $('.nav-dropdown').on('mouseleave', () => {
        $('.nav-dropdown__menu').removeClass('active');
    });

});
