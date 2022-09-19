let x, y;

document.onmousemove = function (e) {
    x = e.clientX;
    y = e.clientY;
    updateProps();
};

document.onscroll = updateProps;

function updateProps() {
    document.body.style.setProperty('--x', (x) + 'px');
    document.body.style.setProperty('--y', (y + document.documentElement.scrollTop) + 'px');
}
/*滑鼠*/

$(window).on('load', function () {
    $('#preloader').css({
        "visibility": "hidden",
        "transition-delay": "2s"
    });
    $('.loader').css({
        "opacity": "0",
        "transform": "translate(-50%,-100%)",
        "transition-delay": "2s"
    });
});
/*loading*/

/*banner-title特效*/
document.addEventListener('DOMContentLoaded', function (event) {
    // array with texts to type in typewriter
    var dataText = ["嗨,我是YuZhen", "一名Freelancer", "專長的設計領域為平面設計與網頁設計！"];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1
            document.querySelector(".banner-title").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 4000);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function () {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }
    // start the text animation
    StartTextAnimation(900);
});


/*輪播*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // mousewheel: true,
});