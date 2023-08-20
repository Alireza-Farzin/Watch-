
$(document).ready(function () {

    // scroll top

    let topBtn = $('.btn-top');

    $(window).scroll(function () {

        if ($(window).scrollTop() > 100) {

            topBtn.fadeIn(500)

        } else {

            topBtn.fadeOut(500);

        }

    });
    

    topBtn.click(function () {
        $('html').animate({
            scrollTop: 0

        }, 1000)
    });


    // modle

    let openModal = $('.modla-toogel');
    let modla = $('.modal-container')
    let modalCloseBtnexit = $('.modal-container .close');



    openModal.click(function () {

        modla.fadeIn(500);

    })


    modalCloseBtnexit.click(function () {

        modla.fadeOut(500);


    })







});
