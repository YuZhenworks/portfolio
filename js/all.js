
$(window).on('load', function () {
    $('#preloader').css({
        "visibility": "hidden",
        "transition-delay": "1.5s"
    });
    $('.loader').css({
        "opacity": "0",
        "transform": "translate(-50%,-100%)",
        "transition-delay": "1.5s"
    });
});
/*loading*/


// /*輪播*/
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     // mousewheel: true,
// });

/*滑動消失特效*/
/*記得跟首頁分開放*/
$(function () {

    var documentEl = $(document),
        fadeElem = $('.product-content-main');


    documentEl.on('scroll', function () {
        var currScrollPos = documentEl.scrollTop();

        fadeElem.each(function () {
            var $this = $(this),
                elemOffsetTop = $this.offset().top;
            if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos - elemOffsetTop) / 400);
        });
    });
});

$(document).ready(function () {
    $("#more-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#target").offset().top
        }, 100);
    });
});
