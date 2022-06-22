$.ajax({
    url: '../json/store.json',
    success: function (data) {
        console.log('로딩완료');
        let storeImg = '';

        $.each(data.mall, function (key, value) {
            storeImg += `<li>
                            <a href="">
                                <img src="${value.url}" alt="">
                                <div>
                                    <p>${value.title}</p>
                                    <img src="./img/icon/shareiconwhite 1.png">
                                </div>
                            </a>
                        </li>`
        });
        $('.store > ul').html(storeImg);
    }
})