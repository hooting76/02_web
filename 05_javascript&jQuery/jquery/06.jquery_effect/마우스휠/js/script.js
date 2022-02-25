let wheelDelta = 0; //휠이벤트 발생하면 반환값을 확인하기 위한 변수
let browser = 0; //파폭브라우저 판별을 위한 변수

//색션9개 배열처리
//마우스휠아래(-120)- 마우스를 한번 내릴때
//다음섹션으로 넘어가게 하기
//마우스휠아래(120)- 마우스를 한번 올릴때
//이전섹션으로 넘어가게 하기
//mousewheel = 크롬, 익스, 사파리, 오페라 에서 사용됨.
//파폭: DOMMouseScroll 
//파폭 브라우저 판별 = window.navigator.userAgent

$('.section').each(function(index){
    $(this).on('mousewheel DOMMouseScroll', function(e){
        e.preventDefault();
        browser = window.navigator.userAgent.toLowerCase().indexOf('firefox'); //파폭브라우저 판별을 위함
        //브라우저가 파폭이면 몇번째에 있는지를 나타내줌
        if(browser>=0){ //0보다 크다는 이야기는 파폭을 가지고있음을 나타냄.
            wheelDelta= -e.detail*40;
            // console.log(wheelDelta);
        }else{
            wheelDelta=e.originalEvent.wheelDelta;
            // console.log(wheelDelta);
        }
        if(wheelDelta<0){
            if(index < $('.section').length-1){
                $('html, body').stop().animate({scrollLeft:$(this).next().offset().left},500);
            }

        }else{
            if(index >0){
                $('html, body').stop().animate({scrollLeft:$(this).prev().offset().left},500);
            }
        }
    });
});
