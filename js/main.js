$(document).ready(function () {
    //popup
    var popup = $('.wrap-popup');
    $('.popup-btn').on('click', function () {
        popup.fadeIn();
        $('body').addClass('active-body');
    });
    $('#close-popup').on('click', function () {
        popup.fadeOut();
        $('body').removeClass()('active-body');
    });
    popup.on('click', function () {
       $(this).fadeOut();
       $('body').removeClass()('active-body');
    });
    $('.popup').on('click', function (e) {
        e.stopPropagation();
    });
    //

    //clickable icons

    $('.icons-list li').on('click', function () {
       var clickItem = $(this).index();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        $('.text-list li').hide();
        $('.text-list li').eq(clickItem).show(500);

    });

    //menu on click
    $('.menu-btn').on('click', function () {
        $('.click-nav').fadeIn();
        $('body').addClass('active-body');
    });
    $('.close-menu').on('click', function () {
        $('.click-nav').fadeOut();
        $('body').removeClass()('active-body');
    });


});