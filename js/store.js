$.ajax({
    url: './json/store.json',
    success: function (data) {
        console.log('로딩완료');
        let storeImg = '';

        $.each(data.mall, function (key, value) {
            storeImg += `<li>
                            <a href="#">
                                <img src="${value.url}" alt="">
                                <div>
                                    <p>${value.title}</p>
                                    <img src="./img/icon/shareiconwhite 1.png">
                                </div>
                            </a>
                        </li>`
        });
        $('.store > ul').html(storeImg);

        // let popDiv = '';
        // let popNum = 0;

        // $.each(data.mall, function (idx, value) {

        //     $('.store > ul > li').on('click', function () {
        //         popNum = $('.store > ul > li').indexOf($(this));
        //         event.preventDefault();

        //         popDiv = `<div class="popupimg">
        //                         <img src="${url.eq(idx)}" alt="">
        //                     </div>
        //                     <div class="popuptext">
        //                         <b>${title.eq(idx)}</b>
        //                         <p>전화번호</p>
        //                         <p>주소</p>
        //                         <button>예약하기</button>
        //                     </div>`;

        //         $('.store > .popup').html(popDiv);

        //         $(this).parent().next().addClass('active');
            
        //     })
        // })
    }
});