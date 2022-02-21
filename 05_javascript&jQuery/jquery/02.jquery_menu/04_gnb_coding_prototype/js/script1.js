$(function(){
    $('nav>ul').hover(function(){
        $(this).stop().animate({height:200},300);
    }, function(){
        $(this).stop().animate({height:40},300);
    });
    $('nav>ul').focusin(function(){
        $(this).stop().animate({height:200},300);
    });
    $('nav>ul').focusout(function(){
        $(this).stop().animate({height:40},300);
    });

});