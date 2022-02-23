let move = $('#wrap ul');
let liWidth = $('#wrap ul li').width();
let arrowRight = $('.rightBtn');
let arrowLeft = $('.leftBtn');
let timer;
let current=0;
let pager=$('.pager span');

// console.log(liWidth);   
slide();
pager.eq(0).addClass('on');
function slide(){
    timer=setInterval(function(){
        move.animate({left:-liWidth},500,function(){
            $(this).children('li:first').insertAfter($(this).children('li:last'));
            $(this).css({left:0});

            current++;
            $(this).next('.pager').find('span').removeClass('on').eq(current).addClass('on');
            if(current==pager.size()){current=0; pager.eq(0).addClass('on')};
        });
    },2000);
};

$('.slide').hover(function(){
    clearInterval(timer);
},function(){
    slide();
});

arrowRight.click(function(){
    move.animate({left:-liWidth},500,function(){
        $(this).children('li:first').insertAfter($(this).children('li:last'));
        $(this).css({left:0});

        current++;
        $(this).next('.pager').find('span').removeClass('on').eq(current).addClass('on');
        if(current==pager.size()){current=0; pager.eq(0).addClass('on')};
    });
});

arrowLeft.click(function(){
    move.find('li:last').insertBefore(move.find('li:first'));
    move.css({left:-liWidth}).stop().animate({left:0},500);

    current--;
    move.next('.pager').find('span').removeClass('on').eq(current).addClass('on');
    if(current==-pager.size()){current=0; pager.eq(0).addClass('on')};
});