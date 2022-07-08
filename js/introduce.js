let scrollTop ='';
const lastIndi = document.querySelector('.indi > div:last-child > a');

window.addEventListener('scroll',function(){
    scrollTop = window.scrollY;

    console.log(scrollTop);

    if(scrollTop > 0){
        lastIndi.innerHTML ="<p>최초의 TGIF</p>";
    }
    if(scrollTop >= 800){
        lastIndi.innerHTML = "<p>TGIF 심볼</p>"
    }

})

const elA = document.querySelector('.helper .helpin a:nth-of-type(1)');
const sitemap = document.querySelector('.helper .sitemap');

elA.addEventListener('click',function(){
    sitemap.classList.add('active');

    sitemap.addEventListener('click',function(){
        this.classList.remove('active');
    })

})