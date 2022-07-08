const help = document.querySelector('header .helper > a:first-child');
const sitemap = document.querySelector('.sitemap');

help.addEventListener('click', function () {
    sitemap.classList.add('active');

    sitemap.addEventListener('click', function () {
        this.classList.remove('active');
    })
});


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    loop: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        clickable: true,
    }
});
// pauseOnMouseEnter: true,
//마우스올리면 잠시 일시정지하는거


//section3
const imgtxt = document.querySelectorAll('.section3 > .content > .imgtxt');
const whbox = document.querySelectorAll('.section3 > .content > .imgtxt > div');
const elA = document.querySelectorAll('.section3 > .content > .imgtxt > a')

function addClass(v, k) {
    whbox.forEach(function (v, k) {
        v.classList.add('white');
    })
    elA.forEach(function (v, k) {
        v.classList.add('left');
    })
};

function removeClass(v, k) {
    whbox.forEach(function (v, k) {
        v.classList.remove('white');
    })
    elA.forEach(function (v, k) {
        v.classList.remove('left');
    })
};


imgtxt.forEach(function (v, k) {
    v.addEventListener('mouseover', function () {
        addClass(v, k);
    })
    v.addEventListener('mouseout', function () {
        removeClass(v, k);
    })
})

//왜 한번에 되는 걸까요....?각각이 안되구....?


//newsletter는 a 클릭해도 페이지 안넘어가게 이벤트막고
//alert 띄우기 아님 팝업
const newsA = document.querySelector('.newsletter > .input > a');

newsA.addEventListener('click', function (event) {
    event.defaultPrevented();
})
