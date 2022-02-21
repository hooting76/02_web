
let tab = $('.tab>li');
let content = $('.content>div');

tab.click(function(){
    let tg=$(this);
    let tga=tg.find(">a");

    tab.find('>a').removeClass('on');
    tga.addClass('on');

    let i=tg.index();
    // console.log(i);
    content.css('display','none');
    content.eq(i).css('display','block');
});

let el = $('.content>div>img');
let urls=["http://www.naver.com","http://www.google.com","http://www.daum.net","http://www.nate.com"];

el.on({mouseover: function(){
    let tg = $(this);
    tg.addClass('on')
}, mouseout:function(){
    let tg = $(this);
    tg.removeClass('on')
}, click:function(){
    let tg = $(this);
    let i = tg.parent().index();
    let linkUrl = urls[i];
    // location.href = linkUrl;
    window.open(linkUrl);
}});
