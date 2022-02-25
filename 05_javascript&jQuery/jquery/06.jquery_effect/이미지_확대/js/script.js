$('.img a').hover(function(){
    $(this).find('img').css({transform:"scale(1.2)", transition: ".3s"})
    $(this).next().css({bottom:0, transition:".3s"});
}, function(){
    $(this).find('img').css({transform:"scale(1)"})
    $(this).siblings().css({bottom:-200});
});


