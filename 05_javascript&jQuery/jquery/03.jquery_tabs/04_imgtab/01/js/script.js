$('.thumbs a').click(function(e){
    e.preventDefault();
    let hrefValue = $(this).attr("href");

    console.log(hrefValue);
    $('#largeImg img').css('display', 'none').attr({src:hrefValue}).fadeIn(1000);
    // $('#largeImg img').css('opacity', 0).attr({src:hrefValue}).animate({opacity:1}, 1000);
    
});
