let banner = $('.visual ul>li');
let perv = $('.prev');
let next = $('.next');
let current =0;
let timer;
let p=$('.number > p ');


numberSlide();
function numberSlide(){
    timer=setInterval(
        function(){
            let prevSlide = banner.eq(current);
            let numP = p.eq(current);
            current++;
            leftMove(prevSlide, 0, '-100%');
            numP.removeClass('on');
            if(current==banner.size()){
                current = 0;
            }
            let nextsilde = banner.eq(current);
            let numPn = p.eq(current);
            leftMove(nextsilde, '100%', 0);
            numPn.addClass('on');
        },2000);

};

function leftMove(tg, start, end){
    tg.css('left',start).stop().animate({left:end},500);
};
$('.visual').on({mouseover:function(){
    clearInterval(timer);
},mouseout:function(){
    numberSlide();
}});

next.click(function(){
    let prevslide=banner.eq(current);
    let numP=p.eq(current);
    leftMove(prevslide, 0, '-100%');
    numP.removeClass('on');
    current++;
    if(current==banner.size())current=0;
    let nextslide=banner.eq(current);
    let numPn=p.eq(current);
    leftMove(nextslide, '100%', 0);
    numPn.addClass('on')
})
prev.click(function(){
    let prevslide=banner.eq(current);
    let numP=p.eq(current);
    leftMove(prevslide, 0, '100%');
    numP.removeClass('on');
    current--;
    if(current==-banner.size())current=0;
    let nextslide=banner.eq(current);
    let numPn=p.eq(current);
    leftMove(nextslide, '-100%', 0);
    numPn.addClass('on')
});