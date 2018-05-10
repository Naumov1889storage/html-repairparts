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

    $('.search--clear button').click(function () {
       $(this).parent('.search--clear').find('input').val('')
    });

    $(".crumbs__search button[type='button']").click(function () {
        $(this).parent().find('.content').toggleClass('active');
    });

    closeIfOutside('.crumbs__search .content', '.crumbs__search .toggler--js')

    function closeIfOutside(block, block2) {
        $(document).click(function(e) {
            var outside = $(e.target).parents().addBack();
            if (!(outside.is(block)) && $(block).hasClass('active') && !(outside.is(block2))) {
                $(block).removeClass('active')
            }
        });
        $(document).keydown(function(e) {
            if (e.keyCode == 27) {
                $(block).removeClass('active')
            }
        });
    };

});