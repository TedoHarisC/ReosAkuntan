$('.kartu').hover(function() {
    $(this).toggleClass('hovered');
});

$(".kartu").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});