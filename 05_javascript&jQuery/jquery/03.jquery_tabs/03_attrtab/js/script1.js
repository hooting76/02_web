$('.summerBtn').on("click",function(){
    $('.image .image').removeClass('spring fall winter');
    $('.image .image').addClass('summer');
});

$('.fallBtn').on("click",function(){
    $('.image .image').removeClass('spring summer winter');
    $('.image .image').addClass('fall');
});

$('.winterBtn').on("click",function(){
    $('.image .image').removeClass('spring summer fall');
    $('.image .image').addClass('winter');
});

$('.springBtn').on("click",function(){
    $('.image .image').removeClass('summer fall winter');
    $('.image .image').addClass('spring');
});

