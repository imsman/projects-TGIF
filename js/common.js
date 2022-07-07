$('.helper').load('inc.html > .helper > .helpin');
$('header').load('inc.html > header > .navi');
$('footer').load('inc.html > footer > .footer_bg');



$('.helper > .helpin > a:first-child').on('click',function(){
    event.preventDefault();

    $('.helpin > .sitemap').addClass('active');
    //사이트맵이 요소에 안들어와있음 영문을 모를지경

    $('.sitemap').on('click',function(){
        $('.sitemap').removeClass('active');
    })
})