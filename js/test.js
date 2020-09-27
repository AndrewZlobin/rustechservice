let allImages = $('#assortment img.assort-image');
let hiddenText = $('#assortment div.position-absolute').next().children().last();
$('#assortment div.position-absolute').each(function () {
    let objTransform = {};
    objTransform.objHide = '0';
    objTransform.objShow = '1';
    objTransform.zIndex = '-5';
    objTransform.class = 'px-3 position-absolute h-100 w-100 d-flex align-items-center justify-content-center';
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
    $(this).click(function () {
        allImages
            .css('transform', objTransform.rotateAgain)
            .css('filter', objTransform.maxBright);
        $(this).prev()
            .css('transform', objTransform.rotate)
            .css('filter', objTransform.darkness)
            .toggleClass('clicked');

        if ($(this).prev().hasClass('clicked')) {
            $(this)
                .css('z-index', objTransform.zIndex);
            $(this)
                .prev()
                .css('transform', objTransform.rotate)
                .css('filter', objTransform.darkness);
            $(this)
                .next().children().last().text(
                $(this).text());
            $(this)
                .css('z-index', objTransform.objShow)
                .text($(this)
                    .next().children().first().text()
                );
        } else {
            $(this)
                .css('z-index', objTransform.zIndex);
            $(this)
                .prev()
                .css('transform', objTransform.rotateAgain)
                .css('filter', objTransform.halfBright);
            $(this)
                .next().children().first()
                .text($(this).text());
            $(this)
                .css('z-index', objTransform.objShow)
                .text($(this)
                    .next().children().last().text());
            $(this).next().children().last().text('');
        }
    });
});