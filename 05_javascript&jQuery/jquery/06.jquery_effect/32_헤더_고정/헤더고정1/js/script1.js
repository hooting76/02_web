let header = $('.page-header');
let headerClone = header.contents().clone();
let headerCloneContainer = $('<div class="page-header-clone"></div>');
let heights = header.offset().top+header.outerHeight(); //70 + 240

let section1Offset = $('#section1').offset().top-150;
console.log(section1Offset); //1872

console.log(heights); //310

headerCloneContainer.append(headerClone);
headerCloneContainer.appendTo('body');

$(window).scroll(function(){
    if($(this).scrollTop() >= heights){
        headerCloneContainer.addClass('visible');
    }else{
        headerCloneContainer.removeClass('visible');
    }

    if($(this).scrollTop() >= section1Offset){
        $('.left').stop().animate({left:10},1000);
        $('.right').stop().delay().animate({opacity:1},1000);
    }else{
        $('.left').stop().animate({left:'-100%'},1000);
    }
});