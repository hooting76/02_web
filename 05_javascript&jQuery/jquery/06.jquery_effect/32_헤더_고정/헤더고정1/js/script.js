
let header = $('.page-header');
let headerOffsetTop = header.offset().top;

console.log(headerOffsetTop); //240

$(window).scroll(function(){
    if($(this).scrollTop() >= headerOffsetTop){
        header.addClass('sticky');
        header.stop().animate({height:150},500,function(){
            return
        });
    }else{
        header.removeClass('sticky');
    }
});