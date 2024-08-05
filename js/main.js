$(function () {
    // Handler for .ready() called.
    portada();

    // Menu Mobile
    new Mmenu("#menu-mobile", {
        navbar: { add: false }
    });
    // console.log(menu);
    setTimeout(() => {
        if (document.querySelector(`.interna`)) {
            document.querySelector(`#content`).scrollIntoView({
                alignToTop: true
            })
        }
    }, 500);
});



function portada() {
    let owl = $("#portada");
    let seccion = $("#seccion").val();

    let autoplay = true;
    let dots = false;
    let loop = false;
    let nav = false;
    if (seccion == "inicio" || seccion == "index") {
        autoplay = true;
        dots = true;
        loop = true;
        nav = false;
    }
    //     owl.on('initialized.owl.carousel', function (e) {
    // //        console.log("Hola");
    //         $('portada').css('display', 'block');
    //         $('.campana-inter').css('display', 'block');

    //     });
    var o = owl.owlCarousel({
        lazyLoad: true,
        autoplay: autoplay,
        autoplayTimeout: 5000,
        items: 1,
        loop: loop,
        nav: nav,
        navText: ['<', '>'],
        dots: dots,
        animateIn: 'bounceInleft',
        animateOut: 'fadeOutRight'
    });

    setTimeout(function () {
        $($(`#portada`)).trigger('refresh.owl.carousel');
    }, 1500);
}

function owl(tag, cantidad, center = false, dots = false, autoplay = false, nav = false) {

    if ($(tag + " > div").length < cantidad) {
        cantidad = $('.' + tag + " > div").length;
        $(tag).css("width", "100%").find("> div").css({ "max-width": "670px", "margin": "auto" });
        return;
    }

    let owl = $(tag).owlCarousel({
        loop: true,
        margin: 10,
        nav: nav,
        navText: ['<', '>'],
        responsiveClass: true,
        autoplay: autoplay,
        dots: dots,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: cantidad
            }
        }
    })
    if ($(tag + '-Next').length)
        $(tag + '-Next').click(function () {
            owl.trigger('next.owl.carousel');
        })
    // Go to the previous item
    if ($(tag + '-Prev').length)
        $(tag + '-Prev').click(function () {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owl.trigger('prev.owl.carousel', [300]);
        })
}


function startOpenStreetMap(lat_centro, lon_centro) {
    // var lat_centro = $(".geo-" + geo_nombre + " #latitud_centro").val();

    // var lon_centro = $(".geo-" + geo_nombre + " #longitud_centro").val();

    const tilesProviders = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    let mymap = L.map('map', { scrollWheelZoom: false }).setView([lat_centro, lon_centro], 17);

    L.tileLayer(tilesProviders, {
        maxZoom: 18,
    }).addTo(mymap)

    // let marker = L.marker([10.4030549, -75.5563103]).addTo(mymap);

    let iconmarker = L.icon({
        iconUrl: '/img/geo.png',
        iconSize: [130, 120],
        iconAnchor: [68, 130]
    });

    let marker2 = L.marker([lat_centro, lon_centro], { icon: iconmarker }).addTo(mymap);
}

function uniteGallery(tag, opciones = {}) {
    $(`${tag}`).unitegallery(opciones);
}