let banner = $('.slideUl li');
let prevBtn = $('.btnImg .prev');
let nextBtn = $('.btnImg .next');
let button = $('.buttonList li');
let timer;
let cnt=0;

slide();
function slide(){
    timer = setInterval(function(){
        let prev = banner.eq(cnt);
        let prevBtn = button.eq(cnt);
        move(prev, 0, '-100%');
        prevBtn.removeClass('on');
        cnt++;

        if(cnt==banner.size()){
            cnt=0;
        }

        let next = banner.eq(cnt);
        let nextBtn = button.eq(cnt);
         move(next, '100%', 0);
        nextBtn.addClass('on');
    },2000);
};

function move(tg, start, end){
    tg.css('left', start).stop().animate({left:end},500);
};

$('.slide').hover(function(){
    clearInterval(timer);
}, function(){
    slide();
});

nextBtn.click(function(){
    let prev = banner.eq(cnt);
    let prevBtn = button.eq(cnt);
    move(prev, 0, '-100%');
    prevBtn.removeClass('on');
    cnt++;

    if(cnt==banner.size()){
        cnt=0;
    }

    let next = banner.eq(cnt);
    let nextBtn = button.eq(cnt);
     move(next, '100%', 0);
    nextBtn.addClass('on');
});

prevBtn.click(function(){
    let prev = banner.eq(cnt);
    let prevBtn = button.eq(cnt);
    move(prev, 0, '100%');
    prevBtn.removeClass('on');
    cnt--;

    if(cnt==-banner.size()){
        cnt=0;
    }

    let next = banner.eq(cnt);
    let nextBtn = button.eq(cnt);
     move(next, '-100%', 0);
    nextBtn.addClass('on');
});

function moveDot1(i){
    if(cnt==i) return;
    let currentEl = banner.eq(cnt);
    let nextEl = banner.eq(i);

    currentEl.css('left',0).stop().animate({left:'-100%'},500);
    nextEl.css('left', '100%').stop().animate({left:0},500);
    cnt=i;
};

function moveDot2(i){
    if(cnt==i) return;
    let currentEl = banner.eq(cnt);
    let nextEl = banner.eq(i);

    currentEl.css('left',0).stop().animate({left:'100%'},500);
    nextEl.css('left', '-100%').stop().animate({left:0},500);
    cnt=i;
};

button.click(function(){
    let tg = $(this);
    let i = tg.index();
    button.removeClass('on');
    tg.addClass('on');

    if(cnt>i){
        moveDot1(i);
    }else{
        moveDot2(i);
    }
});