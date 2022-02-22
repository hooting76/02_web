$(function(){
    $('nav').hover(function(){
        $(this).find('>ul ul').stop().slideDown(200);
        $(this).next('.bg').stop().animate({height:152},200);
    }, function(){
        $(this).find('>ul ul').stop().slideUp(200);
        $(this).next('.bg').stop().animate({height:0},200);
    });

    $('nav>ul>li').hover(function(){
        $(this).find('a').css('color','#000');
        $(this).find('ul>li>a').css('color','#fff');
        $(this).find('ul').css({background:'rgba(0, 0, 0, .3)'});
    }, function(){
        $(this).find('a').css('color','#666');
        $(this).find('ul>li>a').css('color','#666');
        $(this).find('ul').css({background:'none'});
    });

    $('nav').focusIn(function(){
        $(this).find('>ul ul').stop().slideDown(200);
        $(this).next('.bg').stop().animate({height:152},200);
    });
    $('nav').focusOut(function(){
        $(this).find('>ul ul').stop().slideUp(200);
        $(this).next('.bg').stop().animate({height:0},200);
    });
    $('nav>ul>li').focusIn(function(){
        
    });
    $('nav>ul>li').focusOut(function(){
        
    });
});