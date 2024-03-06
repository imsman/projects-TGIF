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



//왜 한번에 되는 걸까요....?각각이 안되구....?
//함수말고 호버로 바꿔야겠당ㅎ


//newsletter는 a 클릭해도 페이지 안넘어가게 이벤트막고
//alert 띄우기 아님 팝업
const newsA = document.querySelector('.newsletter > .input > a');

newsA.addEventListener('click', function (event) {
    event.defaultPrevented();
})
