function slowScroll(id){
    $("html, body").animate({
        scrollTop: $(id).offset().top - 50
    }, 500);
    return false;
}

$(".header-top .menu").on("click", function(){
    if($("header .mobile-menu").is(":visible"))
        $(this).html('<i class="fas fa-bars"></i>');
    else
        $(this).html('<i class="fas fa-times"></i>');
    $("header .mobile-menu").slideToggle();
});


$("#subscribe").on("click", function() {
    let email = $("#email").val();
    email = email.trim();
    if (email.split(".").lenght < 1 || email.split("@").lenght == 2){
        $("#sub_form label").text("Вы ввели неверный e-mail");
        $("#sub_form label").fadeIn();
    }

    setTimeout(function(){
        $("#sub_form label").fadeOut();
    }, 1500);
});

$('.video-play, #modal-video .close-button').on('click', function() {
    $("#modal-video").toggle();
    $("body").toggleClass("overflow-hidden");
    resizeVideo();
});

$(window).on('resize', function() {
    resizeVideo();
}).resize();

function resizeVideo(){
    $("iframe").each(function() {
        let width = $(this).width();
        $(this).css("height", width / 1.77 + "px");
    });
}