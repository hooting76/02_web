$('.menu li a').each(function(){
    let a = $(this);
    let img = a.find('img');
    let src_off = img.attr('src');
    let src_on = src_off.replace('_off','_on');
    a.hover(function(){
        img.attr('src',src_on);
    }, function(){
        img.attr('src',src_off);
    });
});