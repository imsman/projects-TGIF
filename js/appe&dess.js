

$.ajax({
    url: './json/appedess.json',
    success: function (data) {
        console.log('로딩완료');

        let appeinfo = '';
        let dessinfo = '';

        $.each(data.appe, function (key, v) {
            appeinfo += `<div class="info">
            <div class="img">
            <img src="${v.url}" alt="">
            </div>
            <div class="text">
            <p>${v.name}</p>
            <p>${v.sub}</p>
            <p>[${v.from}]</p>
            <p>${v.explain}</p>
            <p>${v.price}</p>
            </div>
        </div>`
        });

        $.each(data.dess, function (key, v) {
            dessinfo += `<div class="info">
            <div class="img">
            <img src="${v.url}" alt="">
            </div>
            <div class="text">
            <p>${v.name}</p>
            <p>${v.sub}</p>
            <p>${v.explain}
            </p>
            <p>${v.price}</p>
            </div>
            </div>`
        });

        $('.appetizer > .blue').html(appeinfo);
        $('.dessert > .blue').html(dessinfo);


        $('.appetizer > .blue').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });

        $('.dessert > .blue').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }
})