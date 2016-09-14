/*
* MOET - Multi-Scrolling Coming Soon Template
* Build Date: July 2015
* Author: Madeon08
* Copyright (C) 2015 Madeon08
* This is a premium product available exclusively here : http://themeforest.net/user/Madeon08/portfolio
*/

/*  TABLE OF CONTENTS
    ---------------------------
    1. Loading / Opening
    2. MultiScroll
    3. Carousels
    4. Countdown
    5. Newsletter
    6. Swipebox
    7. Tooltips
*/

/* ------------------------------------- */
/* 1. Loading / Opening ................ */
/* ------------------------------------- */

$(document).ready(function(){

    // Controls
    $('.youtube-control .fa-pause').on('click', function() {
        $(".fa-pause").addClass("display-none").removeClass("");
        $(".fa-play").addClass("").removeClass("display-none");
    });

    $('.youtube-control .fa-play').on('click', function() {
        $(".fa-play").addClass("display-none").removeClass("");
        $(".fa-pause").addClass("").removeClass("display-none");
    });

    $( ".youtube-control .fa-expand" ).click(function() {
        $(".fa-expand").addClass("display-none").removeClass("");
        $(".fa-compress").addClass("").removeClass("display-none");
        $(".ms-left").removeClass("fadeInLeft").addClass("fadeOutLeft");
        $(".ms-right").removeClass("fadeInRight").addClass("fadeOutRight");
    });

    $( ".youtube-control .fa-compress" ).click(function() {
        $(".fa-compress").addClass("display-none").removeClass("");
        $(".fa-expand").addClass("").removeClass("display-none");
        $(".ms-left").removeClass("fadeOutLeft").addClass("fadeInLeft");
        $(".ms-right").removeClass("fadeOutRight").addClass("fadeInRight");
    });

    var onMobile = false;
            
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) { onMobile = true; }
    if( ( onMobile === false ) ) {

        var myPlayer = jQuery( "#bgndVideo" ).YTPlayer();
        myPlayer.on("YTPStart", function(){
       
            // General animations
            setTimeout(function() {

                $(".loading-part").addClass("index-999");

                $(".ms-left").addClass("fadeInLeft");
                $(".ms-right").addClass("fadeInRight");

                $(".social-icons").addClass("fadeIn").removeClass("opacity-0");

                $(".youtube-control").addClass("fadeIn").removeClass("opacity-0");

            }, 0);

            // FadeInDown for the digits
            setTimeout(function() {
                $('.digit').each(function(i) {
                    (function(self) {
                        setTimeout(function() {
                            $(self).addClass('fadeInDown').removeClass("opacity-0");
                        }, (i * 150) + 150);
                    })(this);
                });
            }, 1000);

            // FadeInRight for the text "Days", FadeInUp for the nav and active link to the active point to display the tooltip
            setTimeout(function() {
                $(".text-right").addClass("fadeInRight").removeClass("opacity-0");

                $('.link-nav').each(function(i) {
                    (function(self) {
                        setTimeout(function() {
                            $(self).addClass('fadeInUp').removeClass("opacity-0");
                        }, (i * 200) + 200);
                    })(this);
                });

                $('#multiscroll-nav li a.active').addClass('active-opening');
            }, 1850);

            // FadeInUp for the text
            setTimeout(function() {
                $(".text-news").addClass("fadeInUp").removeClass("opacity-0");
            }, 2000);

            // FadeInUp for the newsletter form
            setTimeout(function() {
                $("#subscribe").addClass("fadeInUp").removeClass("opacity-0");  
            }, 2400);

            // Display none for the loading
            setTimeout(function() {
                $(".loading-part").addClass("display-none");
            }, 3200);

            // Remove all the animations to prevent when the screen is resized, for playing them again, if you remove the next lines, the entrance animations will be played each time
            setTimeout(function() {
                $(".digit").removeClass("fadeInDown animated-middle").addClass("");
                $(".text-right").removeClass("fadeInRight animated-middle").addClass("");
                $(".text-news").removeClass("fadeInRight animated-middle").addClass("");
                $("#subscribe").removeClass("fadeInRight animated-middle").addClass("");
                $('#multiscroll-nav li a').removeClass('active-opening');
            }, 3650);
        });

        $(".player").mb_YTPlayer();

    } else {

        $(window).load(function() {

            // FadeOut for the loading part
            setTimeout(function() {

                $(".loading-part").addClass("index-999");

                $(".ms-left").addClass("fadeInLeft");
                $(".ms-right").addClass("fadeInRight");

                $("#multiscroll-nav").css("opacity" , "1");
                
                $(".vegas-overlay").addClass("display-none").removeClass("");

            }, 0);

            setTimeout(function() {
                $(".loading-part").addClass("display-none");
            }, 3200);

        });
    
        $(".youtube-control").addClass("display-none").removeClass("");

        // Vegas used to display the picture of your choice or even a slideshow on mobile
        $('body').vegas({
            slides: [
                { src: 'img/left-1.jpg' }
            ]
        });    
    }

    // Hover purchase part, effect on the button
    $("#left3").hover(
        function() {
            $('a.action').toggleClass('shake');
        }
    );

    /* ------------------------------------- */
    /* 2. MultiScroll ...................... */
    /* ------------------------------------- */

    $('#multi-div').multiscroll({
        // anchors: ['Home', 'About', 'Services', 'Contact'],
        loopTop: true,
        loopBottom: true,
        navigation: true,
        navigationTooltips: ['Home', 'About', 'Services', 'Contact'],
    });

    function toggleMs() {
    if ($(window).width() <= 1024) {

        $('#multi-div').multiscroll.destroy();

    } else {

        $('#multi-div').multiscroll.build();

        }
    }

    toggleMs();  // Checking when page load

    $(window).resize(function(){
        toggleMs(); // Checking to destroy or build when we resize browser
    });
    
    /* ------------------------------------- */
    /* 3. Carousels ........................ */
    /* ------------------------------------- */

    $('#carousel-pictures').carousel({
      interval: 5000 // False if you want to remove auto slide
    });

    $('#carousel-services').carousel({
      interval: 5000 // False if you want to remove auto slide
    });

    /* ------------------------------------- */
    /* 4. Countdown ........................ */
    /* ------------------------------------- */

    // Set you end date just below
    $('#countdown_dashboard').countDown({
        targetDate: {
            'day': 31,
            'month': 12,
            'year': 2016,
            'hour': 11,
            'min': 13,
            'sec': 0
        },
        omitWeeks: true
    });

    /* ------------------------------------- */
    /* 5. Newsletter ....................... */
    /* ------------------------------------- */

    $("#notifyMe").notifyMe();

    /* ------------------------------------- */
    /* 6. Swipebox ......................... */
    /* ------------------------------------- */

    $('.swipebox').swipebox();

    /* Video */
    $('.swipebox-video').swipebox();

    /* ------------------------------------- */
    /* 7. Tooltips ......................... */
    /* ------------------------------------- */

    if (window.matchMedia("(min-width: 1025px)").matches) { 
            
        $(function () { $("[data-toggle='tooltip']").tooltip(); });

    }

});