


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


    $('.goTo-eventinfo').click(function(e) {
      $("html, body").animate({ scrollTop: $('#eventinfo').offset().top -62 }, 1000);
      e.preventDefault();
    });

    $('.goTo-transportation').click(function(e) {
      $("html, body").animate({ scrollTop: $('#transportation').offset().top -62 }, 1000);
      e.preventDefault();
    });

    $('.goTo-hotels').click(function(e) {
      $("html, body").animate({ scrollTop: $('#hotels').offset().top -62 }, 1000);
      e.preventDefault();
    });

    $('.goTo-registry').click(function(e) {
      $("html, body").animate({ scrollTop: $('#registry').offset().top -62 }, 1000);
      e.preventDefault();
    });

    $('.goTo-photos').click(function(e) {
      $("html, body").animate({ scrollTop: $('#photos').offset().top -62 }, 1000);
      e.preventDefault();
    });

    $('.goTo-story').click(function(e) {
      $("html, body").animate({ scrollTop: $('#story').offset().top -62 }, 1000);
      e.preventDefault();
    });

    $('.goTo-contact').click(function(e) {
      $("html, body").animate({ scrollTop: $('#outro').offset().top -62 }, 1000);
      e.preventDefault();
    });


    $('.navbar-collapse').on('show.bs.collapse', function (e) {
        //alert('show');
        $('.navigation').addClass('navigation--isOpen')
    })

    $('.navbar-collapse').on('hidden.bs.collapse', function (e) {
        //alert('hide');
        $('.navigation').removeClass('navigation--isOpen')
    })

});
