function autoSlideWelcomeCarousel() {
    var curActiveImg = $(".imgBelt").find(".active"),
        position = $(".imgBelt").children().index(curActiveImg),
        imgNum = $(".imgUnit").length;

    if(position < imgNum -1) {
        $("img.active").removeClass("active").next().addClass("active");
        $("span.active").removeClass("active").next().addClass("active");
    } else {
        $(".imgUnit").removeClass("active").first().addClass("active");
        $(".imgControl").removeClass("active").first().addClass("active");
    }
}

function autoSlideTestimonials() {
    var curActive = $(".testimonialsContainer").find(".activeClient"),
        position = $(".testimonialsContainer").children().index(curActive),
        num = $(".testimoni").length;

    if(position < num -1) {
        $(".testimoni.activeClient").removeClass("activeClient").next().addClass("activeClient");
        $(".testimoniControl.activeClient").removeClass("activeClient").next().addClass("activeClient");
    } else {
        $(".testimoni").removeClass("activeClient").first().addClass("activeClient");
        $(".testimoniControl").removeClass("activeClient").first().addClass("activeClient");
    }
}

$(document).ready(function() {
    //top navbar sticky effect
    $(window).on("scroll", function(event) {
        if($(window). scrollTop()) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    });

    //top navigation bar sliding effect
    $("#navToggle").click(function() {
        $(".topNav").slideToggle();
    });

    //welcome section image slider
    $(".imgUnit").first().addClass("active");
    $(".imgControl").first().addClass("active");

    setInterval(autoSlideWelcomeCarousel, 5000);

    $(".imgControl").click(function() {
        clearInterval(autoSlideWelcomeCarousel);

        var siblings = $(this).parent().children(),
            position = siblings.index($(this));

        $(".imgUnit").removeClass("active").eq(position).addClass("active");
        siblings.removeClass("active");
        $(this).addClass("active");
    });
    
    //awesome section slidetoggle
    $(".col .awesome .title span").click(function() {
        $(this).parent().parent().find("p").slideToggle();
    });

    //screenshots carousel
    $(".kc-wrap").KillerCarousel({
        width: 1200,
		spacing3d: 150,
		spacing2d: 150,
		showReflection: true,
		infiniteLoop: true,
		autoScale: 100
    });

    //video play
    $("#videoPlay").click(function() {
        $("#videoScreen").show();
    });
    $("#videoScreen #close").click(function() {
        stopVideo();
        $("#videoScreen").hide();
    });

    //testimonial carousel
    $(".testimoni").first().addClass("activeClient");
    $(".testimoniControl").first().addClass("activeClient");

    setInterval(autoSlideTestimonials, 10000);

    $(".testimoniControl").click(function() {
        clearInterval(autoSlideTestimonials);

        var siblings = $(this).parent().children(),
            position = siblings.index($(this));

        $(".testimoni").removeClass("activeClient").eq(position).addClass("activeClient");
        siblings.removeClass("activeClient");
        $(this).addClass("activeClient");
    });

    $("#clientNext").click(function() {
        clearInterval(autoSlideTestimonials);
        
        var curActiveClient = $('.testimonialsContainer').find('.activeClient'),
            position = $('.testimonialsContainer').children().index(curActiveClient),
            clientNum = $('.testimoni').length;

        if(position < clientNum - 1) {
            $('.activeClient').removeClass('activeClient').next().addClass('activeClient');
        } else {
            $('.testimoni').removeClass('activeClient').first().addClass('activeClient');
            $('.testimoniControl').removeClass('activeClient').first().addClass('activeClient');
        }
    });

    $("#clientPrev").click(function() {
        clearInterval(autoSlideTestimonials);
        
        var curActiveClient = $('.testimonialsContainer').find('.activeClient'),
            position = $('.testimonialsContainer').children().index(curActiveClient),
            clientNum = $('.testimoni').length;

        if(position > 0) {
            $('.activeClient').removeClass('activeClient').prev().addClass('activeClient');
        } else {
            $('.testimoni').removeClass('activeClient').last().addClass('activeClient');
            $('.testimoniControl').removeClass('activeClient').last().addClass('activeClient');
        }
    });

    //our team carousel
    $(".owl-carousel").owlCarousel({
		loop: !0,
		responsiveClass: !0,
        dots: !0,
		margin: 20,
		nav: !1,
		stagePadding: 10,
		responsive: {
			0: {
				items: 1,
				margin: 300
			},
			500: {
				items: 2
			},
			992: {
				items: 3
			}
		}
    });
    
    //statistics counter
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    
    //scrollup
    $.scrollUp({
        scrollText: '<i class="fas fa-chevron-up fa-fw fa-2x"></i>'
    });

    //navigation active link
    $(".topNav ul li a").click(function() {
        $(".topNav ul li").removeClass("activeSection");
        $(this).parent().addClass("activeSection");
    });

    $('a[href^="#"]').on('click', function(event) {
        var target = $($(this).attr('href'));
     
        if(target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});