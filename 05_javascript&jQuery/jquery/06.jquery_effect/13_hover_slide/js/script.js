$('.section1').hover(function(){
    $('.section1').stop().animate({width:920},500);
},function(){
    $(this).stop().animate({width:200},500);
});

$('.section2').hover(function(){
    $('.section2').stop().animate({width:920},500);
    $('.visual').animate({left:-240},500);
},function(){
    $(this).stop().animate({width:200},500);
    $('.visual').animate({left:0},500);
});

$('.section3').hover(function(){
    $('.section3').stop().animate({width:920},500);
    $('.visual').animate({left:-480},500);
},function(){
    $(this).stop().animate({width:200},500);
    $('.visual').animate({left:0},500);
});

$('.section4').hover(function(){
    $('.section4').stop().animate({width:920},500);
    $('.visual').animate({left:-720},500);
},function(){
    $(this).stop().animate({width:200},500);
    $('.visual').animate({left:0},500);
});

