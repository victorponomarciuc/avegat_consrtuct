var Animation = function() {
    var hFrom = $(window).scrollTop();
    var eTop = $('.statistics_section_overlay').offset().top;
    var eHeight = $('.statistics_section_overlay').height();
    var hTo = eTop + eHeight;
    if ($(".statistics_section_overlay").offset().top > hFrom && $(".statistics_section_overlay").offset().top < hTo){
        let element_whith_delay = $('.count_element').delay(500);
        element_whith_delay.spincrement({
            duration: 5000
        });
    }
};
$(window).scroll(function() {
    Animation();
});
