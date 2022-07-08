$('.helper').load('inc.html > .helper > .all', navi);
$('header').load('inc.html > header > .navi');
$('footer').load('inc.html > footer > .footer_bg');




function navi() {
    const help = document.querySelector('.helper .helpin > a:first-child');
    const sitemap = document.querySelector('.sitemap');

    help.addEventListener('click', function () {
        sitemap.classList.add('active');
        
        sitemap.addEventListener('click',function(){
            this.classList.remove('active');
        })
    })
}
