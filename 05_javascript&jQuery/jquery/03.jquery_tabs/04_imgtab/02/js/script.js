
$('.thumbs em').hide();
$('.thumbs a').click(function(e){
    e.preventDefault();
    let hrefValue = $(this).attr("href");

    $('#caption').remove();

    // console.log(hrefValue);
    $('#largeImg img').css("display","none").attr({src:hrefValue}).fadeIn(500);
    let msg = $(this).next('em').text();

    $('#largeImg').append('<div id = "caption"></div>');
    $('#largeImg #caption').text(msg);

    let emHeight = $('#largeImg #caption').height()+25;
    // console.log(emHeight);
    $('#largeImg #caption').animate({top:-emHeight},300);
});
