var accordion = function() {

    $('.accordion_content', '.accordion').slideUp(0);
    $('.accordion_title', '.accordion').click(function() {
        $('.accordion_content', '.accordion').stop();
        var accordionContent = $(this).next('.accordion_content');
        $(this).toggleClass('active');
        $(accordionContent).slideToggle(300);
    });

};