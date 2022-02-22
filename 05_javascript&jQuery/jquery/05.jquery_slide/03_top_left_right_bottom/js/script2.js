let move = $('#wrap ul');
let liWidth = $('#wrap ul li').width();
let arrowRight = $('.rightBtn');
let arrowLeft = $('.leftBtn');
let timer;

// console.log(liWidth);   
slide();
function slide(){
    timer=setInterval(function(){
        move.animate({left:-liWidth},500,function(){
            $(this).children('li:first').insertAfter($(this).children('li:last'));
            $(this).css({left:0});
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
    });
});

arrowLeft.click(function(){
    move.find('li:last').insertBefore(move.find('li:first'));
    move.css({left:-liWidth}).stop().animate({left:0},500);
});