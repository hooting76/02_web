
setInterval(function(){
    $('.top_line').css("left","-100%").animate({left:0},500);
    $('.bottom_line').css("left","100%").animate({left:0},500);
    $('.left_line').css("top","100%").animate({top:0},500);
    $('.right_line').css("top","-100%").animate({top:0},500);
},1000);

