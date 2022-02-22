$(function(){
    // $('nav>ul>li').hover(function(){
    //     $(this).find('.sub').addClass('active');
    // }, function(){
    //     $(this).find('.sub').removeClass('active');
    // });
    // $('nav>ul>li').focusin(function(){
    //     $(this).find('.sub').addClass('active');
    // });
    // $('nav>ul>li').focusout(function(){
    //     $(this).find('.sub').removeClass('active');
    // });

    $('nav>ul>li').hover(function(){
        $(this).find('.sub').stop().animate({height:164},300)
    },function(){
        $(this).find('.sub').stop().animate({height:0},300)
    });
    $('nav>ul>li').focusin(function(){
        $(this).find('.sub').stop().animate({height:164},300)
    });
    $('nav>ul>li').focusout(function(){
        $(this).find('.sub').stop().animate({height:0},300)
    });
});