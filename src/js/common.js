$(function () {

    accordion();

    $('.burger').click(function () {
        $(this).toggleClass('active')
    });

    $('#header__burger .burger').click(function () {
       $('.topnav, .overlay').toggleClass('active')
    });
    $('.overlay').click(function () {
        $('.topnav, .overlay, .burger').toggleClass('active')
    });

});