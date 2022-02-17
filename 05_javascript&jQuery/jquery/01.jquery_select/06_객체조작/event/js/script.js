// 2초 동안 사라지는 효과
$('#div1').hide(2000);
// 2초 동안 생성되는 효과
$('#div2').show(2000);

// 넓이 & 높이 바꾸기 ->()안에 숫자는 픽셀단위이며, px은 쓰지않고 숫자만 대입할때는 ''를 사용하지않는다.
$('.box1').width(300).height(200);
$('.box2').height(200);


// fade효과 모음
// fadeIn <-()안에 숫자(초)를 넣든지 "slow"같은 문자를 넣든지 하여서 속도조절을 할수있다. 
$('.fadeIn').fadeIn(2000);
$('.fadeOut').fadeOut("slow");
// fadeTo(a,b)가 있다면 a는 진행시간(초) 이고, b는 목표 투명도를 이야기 한다.
// 5초동안 투명도 0.3일때까지의 효과
$('.fadeTo').fadeTo(5000,.3);


// slide효과
$('.slideDown').slideDown(2000);
$('.slideUp').slideUp(2000);


// animate
// 대상을 left:500 만큼 움직이고 이를 1초동안 동작한다는 의미
// 대각선으로 이동하고자 할때는 방향을 하나 더 제시해주면 된다.  주석처리된 top: 500 을 주석풀고 실행해볼것.
$('.aniBox').animate({left: 500, /*top: 500*/},1000);
$('.aniBox1').animate({left: 500}, 2000);
$('.aniBox2').delay(1000).animate({bottom: 500},1000).animate({right:500},500);

// 당구대 예제
$('#stick').animate({top: 750},1000).animate({top: 550},200).animate({top:650},200);
$('#ball01').delay(1170).animate({top:225},300).animate({top:240,left:230},400);
$('#ball02').delay(1050).animate({top:150, left:210},300);
$('#ball03').delay(1050).animate({top:150, left:270},300);
$('#ball04').delay(1050).animate({top:0, left:100},300).animate({top:70,left:0},400);
$('#ball05').delay(1050).animate({top:0,left:250},300).animate({top:30,left:220},300);
$('#ball06').delay(1050).animate({top:0,left:380},300).animate({top:70,left:400},400);
$('#ball07').delay(1050).animate({top:250},300).animate({top:260,left:230},400);