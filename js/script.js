// JavaScript source code
window.onload = function () {
    try {
        var w = $(window).height();
        var difference = w - $("body").height();
        if (difference > 0) {
            var NewHeight = $(".content").height() + difference;
            $(".content").height(NewHeight);
        }
        
    }   catch (err) {

    }
}
$(document).ready(function () {
    
    $("#flip").click(function () {
        $("#panel").slideToggle("slow");
        return false;
    });

    try {
        var center = [33.893639, 35.548041];
        var anjar = [33.732953, 35.922479];
       
        $('.map')
            .gmap3({
                center: center,
                zoom: 10,
               
            })
            .marker({
                icon: 'http://maps.google.com/mapfiles/marker_green.png',
                position: center,
            })
            .marker({
                icon: 'http://maps.google.com/mapfiles/marker_green.png',
                position: anjar,
            });
    } catch (err) {

    }

    try {
        $('.album').slick({
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            infinite: true
        });
    } catch (err) {

    }

    try {
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            items: 5,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true
        });
        owl.trigger('play.owl.autoplay', [1000])
    } catch (err) {

    }
    try {
        $('.popup-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function (item) {
                        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                    }
                }
        });
    } catch (err) {
    
} 
});
