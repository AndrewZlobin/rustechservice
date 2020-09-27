$(function () {
    'use strict';
    jQuery(document).ready(function () {
        // Add smooth scrolling to all links
        jQuery("a").on('click', function (event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                jQuery('html, body').animate({
                    scrollTop: jQuery(hash).offset().top
                }, 300, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    });

    $('#show-navbar').click(function () {
        $('#navbar-elements').slideToggle();
    });

    $('#rts-carousel').carousel({
        interval: 3500
    });

    $('#assortment div.position-absolute').each(function () {
        let objTransform = {};
        objTransform.objHide = '0';
        objTransform.objShow = '1';
        objTransform.rotate = 'rotateY(-180deg)';
        objTransform.rotateAgain = 'rotateY(0deg)';
        objTransform.maxBright = 'brightness(1)';
        objTransform.halfBright = 'brightness(0.5)';
        objTransform.darkness = 'brightness(0.15)';
        objTransform.textOnHover = $(this).text();
        objTransform.textOnClick = $(this).next().children().first().text();
        objTransform.textStack = $(this).next().children().last().text();

        $(this).css('opacity', objTransform.objHide);

        $(this).prev()
            .css('transform', objTransform.rotateAgain)
            .css('filter', objTransform.maxBright);

        $(this).hover(
            function () {
                $(this).prev()
                    .css('filter', objTransform.halfBright);
                $(this)
                    .css('opacity', objTransform.objShow);
            },
            function () {
                $(this).prev()
                    .css('filter', objTransform.maxBright);
                $(this)
                    .css('opacity', objTransform.objHide);
            });
    });

    $("[name = 'cooperation-form']").submit(function (event) {
        event.preventDefault();

        let data = {
            fullname: $('#form_fullname').val(),
            email: $('#form_email').val(),
            phonenum: $('#form_phonenum').val(),
            theme: $('#form_theme').val(),
            message: $('#form_message').val(),
        };

        $.ajax({
            type: "POST",
            url: "mailing.php",
            data: data,
            success: function () {
                $('#alert').slideToggle();
                setTimeout(function () {
                    $('#alert').slideToggle();
                }, 3000);
            }
        });
    });
});