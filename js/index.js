$('.bannerAll').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover:true
});
//마우스올리면 잠시 일시정지하는거

$('.helper a:first-child').on('click',function(){
    $('.sitemap').toggleClass('active');
})