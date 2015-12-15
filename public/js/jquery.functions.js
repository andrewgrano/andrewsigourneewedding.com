


$(function() {
    // var windowHeight = $(window).height();
    // var windowHeightx1point5 = (windowHeight * 1.5);


    // var url = $('.parallax ').css('background-image').replace('url(', '').replace(')', '').replace("'", '').replace('"', '');
    // var bgImg = $('<img id="bgimgplaceholder" class="img-responsive">');
    // bgImg.hide();
    // bgImg.bind('load', function()
    // {
    //     var height = $(this).height();
    //     // alert(height);
    //     $('.parallax').css('height',height);
    //     $('.parallax__buttonWrapper').css('height',height);
    // });
    // $('.parallax ').append(bgImg);
    // bgImg.attr('src', url);


    $(".readmore").html("Read More");

    $(".readmore").click(function() {
        if ($(this).hasClass("readmore")){
            $(this).removeClass("readmore")
            $(this).addClass("readless");
            $(".readless").html("Read Less");
        } else {
            $(this).removeClass("readless")
            $(this).addClass("readmore")
            $(".readmore").html("Read More");
        }
    });


});
