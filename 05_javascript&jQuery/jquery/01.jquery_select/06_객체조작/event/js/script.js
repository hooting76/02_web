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

//on() 그룹메서드
$('.clickBtn').on("mouseover focus", function(){
    $('.buttonBox').text('나 바뀜');
});
// $('.clickBtn1').on({"mouseover focus":function(){
//     $('.buttonBox1').text('집 보내줘....');
// }});
$('.clickBtn1').on({"mouseover":function(){
    $('.buttonBox1').text('나 바뀜1');
}, "focus":function(){
    $('.buttonBox1').text('나 바뀜2');
}});

$('.clickBtn1').on({"mouseout":function(){
    $('.buttonBox1').text('버튼1로 돌아감');
}, "blur":function(){
    $('.buttonBox1').text('나 돌아갈래~');
}});


$('.btn1').click(function(){
    $('.btn1').parent().next().css("color","red");
});
$('.btn2').on({"mouseover focus":function(){
    $(this).parent().next().css("color","green")
},"mouseout blur":function(){
    $(this).parent().next().css("color","blue")
}});

//triger
$('.btn3').click(function(){
    $('.btn3').parent().next().css("color","red");
});
$('.btn4').on({"mouseover focus":function(){
    $(this).parent().next().css("color","green")
},"mouseout blur":function(){
    $(this).parent().next().css("color","blue")
}});

$('.btn3').off("click"); //이벤트 제거
$('.btn4').trigger("mouseover"); //강제로 이벤트 발생

// ready. load
$(document).ready(function(){
    let imgHeight=$('.img1').height();
    console.log(imgHeight);
});
$(window).load(function(){
    let imgHeight1=$('.img1').height();
    console.log(imgHeight1);
});

// click이벤트
$('.clickEvt').click(function(){
    $('.clickEvt').text("진짜눌렀네").css({"background":"red","padding":"20px"});
});
$('.clickTest').click(function(){
    $(this).text("멍 머 이");
});

//preventDefault() 기본 이벤트 차단
$('.default1').click(function(e){
    e.preventDefault();
    $('.txt1').text("내용이 달라졌습니다!").css("background","red");
});
$('.default2').click(function(){
    $('.txt2').text("내용이 달라졌습니다!").css("background","yellow");
    return false;
});

$('.dafault3').on('dblclick', function(){
    $('.txt3').text("더블클릭!");
});

// hover
$('.hoverEvt').hover(function(){
    $(this).text("마우스 올라왔을때").css("background","green");
}, function(){
    $(this).text("마우스 빠져 나왔을때 두번 사용합니다.").css("background","yellow");
});

//mouseenter / mouseleave
// $('.mouseEvt').mouseenter(function(){
//     $(this).text("마우스 포인터가 올라왔을때").css("background","yellow");
// });
// $('.mouseEvt').mouseleave(function(){
//     $(this).text("마우스 포인터가 떠났을때 사용합니다.").css("background","yellow");
// });
$('.mouseEvt').on({"mouseenter" :function(){
    $(this).text("마우스 포인터가 올라왔을때").css("background","yellow");
}, "mouseleave" :function(){
    $(this).text("마우스 포인터가 떠났을때 사용합니다.").css("background","yellow");
}});

$('.mouseoverEvt').on({"mouseover" :function(){
    $(this).text("마우스 포인터가 올라왔을때").css("background","yellow");
}, "mouseout" :function(){
    $(this).text("마우스 포인터가 떠났을때 사용합니다.").css("background","yellow");
}});

//each
// $('.animal').each(function(){
//     let names=$(this).text();
//     alert(names);
// });
let div3 = $('.div3');
console.log(div3.width());
console.log(div3.height());
console.log(div3.css("font-size"));