let menu = $('.nav li');

menu.on({mouseover: function(){
    close();
    let tg = $(this);
    let onImg = tg.find('.menu_text > .on');
    let offImg = tg.find('.menu_text > .off');

    let menuImage = tg.find('.menu_image');
    let imageWidth = menuImage.find('img').width();

    onImg.css('display','block');
    offImg.css('display','none');
    menuImage.stop().animate({width:imageWidth}, {duration:600 , easing:'easeOutCubic'});

}, mouseout:function(){
    let tg = $(this);
    let onImg = tg.find('.menu_text > .on');
    let offImg = tg.find('.menu_text > .off');

    let menuImage = tg.find('.menu_image');
    let imageWidth = 0;

    onImg.css('display','none');
    offImg.css('display','block');
    menuImage.stop().animate({width:imageWidth},600);
    open();
}});

open();
function open(){
    let tg = $('.nav li').eq(1);
    let onImg = tg.find('.menu_text > .on');
    let offImg = tg.find('.menu_text > .off');

    let menuImage = tg.find('.menu_image');
    let imageWidth = menuImage.find('img').width();

    onImg.css('display','block');
    offImg.css('display','none');
    menuImage.stop().animate({width:imageWidth}, {duration:600 , easing:'easeOutCubic'});
};

function close(){
    let tg = $('.nav li').eq(1);
    let onImg = tg.find('.menu_text > .on');
    let offImg = tg.find('.menu_text > .off');

    let menuImage = tg.find('.menu_image');
    let imageWidth = 0;

    onImg.css('display','none');
    offImg.css('display','block');
    menuImage.stop().animate({width:imageWidth},600);
}