let menu = $('.nav li');

menu.on({mouseover: function(){
    let tg = $(this);
    let onImg = tg.find('.menu_text > .on');
    let offImg = tg.find('.menu_text > .off');

    let menuImage = tg.find('.menu_image');
    let imageHeight = menuImage.find('img').height();

    onImg.css('display','block');
    offImg.css('display','none');
    menuImage.stop().animate({height:imageHeight}, {duration:600 , easing:'easeOutCubic'});

}, mouseout:function(){
    let tg = $(this);
    let onImg = tg.find('.menu_text > .on');
    let offImg = tg.find('.menu_text > .off');

    let menuImage = tg.find('.menu_image');
    let imageHeight = 0;

    onImg.css('display','none');
    offImg.css('display','block');
    menuImage.stop().animate({height:imageHeight},600);
}});