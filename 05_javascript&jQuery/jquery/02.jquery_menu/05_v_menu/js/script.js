$('.sub').hide();

$('.title').click(function(e){
    e.preventDefault();
    $('.sub').stop().slideUp();
    $(this).next('.sub').stop().slideDown(300);
});