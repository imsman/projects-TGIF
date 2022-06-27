$('.helper').load('inc.html > .helper > div')
$('header').load('inc.html > header > .navi');
$('footer').load('inc.html > footer > .footer_bg');



$('.helper').on('click',function(){
    $('.helper .sitemap').toggleClass('active');
})