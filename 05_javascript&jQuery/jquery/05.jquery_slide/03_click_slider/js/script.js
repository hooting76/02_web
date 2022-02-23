let moving = $('.area>ul');
let timer;
let wid=moving.find('li').width();
// console.log(wid); //200

slide();
function slide(){
    timer = setInterval(function(){
        moving.animate({left:wid*-1},500, function(){
            $(this).find('li:first').insertAfter($(this).find('li:last'));
            $(this).css({left:0});
        });
    },2000);
};

$('.container').hover(function(){
    clearInterval(timer);
},function(){
    slide();
});

$('.right').click(function(){
    moving.animate({left:wid*-1},500, function(){
        $(this).find('li:first').insertAfter($(this).find('li:last'));
        $(this).css({left:0});
    });
});
$('.left').click(function(){
    moving.find('li:last').insertBefore(moving.find('li:first'));
    moving.css({left:-wid}).stop().animate({left:0},500);
});