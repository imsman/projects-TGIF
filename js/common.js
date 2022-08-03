$('.helper').load('inc.html > .helper > .all', navi);
$('header').load('inc.html > header > .navi');
$('footer').load('inc.html > footer > .footer_bg');




function navi() {
    let help = document.querySelector('.helpin > a:nth-of-type(1)');
    let sitemap = document.querySelector('.sitemap .popup');

    $(help).on('click', function () {
        $(sitemap).addClass('active');
        console.log('click');

        $(sitemap).on('click', function () {
            $(this).removeClass('active');
        })
    })
}
