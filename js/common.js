$('header').load('inc.html > header > .navi');
$('footer').load('inc.html > footer > .footer_bg');




function navi() {
    let help = document.querySelector('.helpin > p:nth-of-type(1)');
    let sitemap = document.querySelector('.sitemap');

    $(help).on('click', function () {
        $(sitemap).addClass('active');
        // console.log('click');

        $(sitemap).on('click', function () {
            $(this).removeClass('active');
        })
    })
}
