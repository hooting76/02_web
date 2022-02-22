$('.slideshow').each(function(){
    let timer;
    let container = $(this);
    switchimg();
    function switchimg(){
        timer = setInterval(function switchImg(){
            let imgs = container.find('img');
            let first = imgs.eq(0);
            let second = imgs.eq(1);
            first.fadeOut().appendTo(container);
            second.fadeIn();
        },3000);
    };
    container.hover(function(){
        clearInterval(timer);
    }, function(){
        switchimg();
    });
});