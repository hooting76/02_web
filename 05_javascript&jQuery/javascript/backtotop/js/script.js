let btt = document.getElementById('back-to-top');
let docEl = document.documentElement; //문서 자체를 html가져와서 변수대입
let offset; //값 미정된 스크롤양
let scrollPos; //스크롤양
let docHeight; //문서의 높이값

// docHeight = docEl.scrollHeight;
// docHeight = docEl.offsetHeight;
scrollPos = docEl.scrollTop;
console.log(scrollPos);

docHeight=Math.max(docEl.offsetHeight, docEl.scrollHeight);
if(docHeight !=0){
    offset = docHeight/4; //끝까지 스크롤 되지않고 1/4만 스크롤되면
}
window.addEventListener('scroll', function(){
    scrollPos = docEl.scrollTop;
    if(scrollPos > offset){
        btt.className="visible";
    }else{
        btt.className ="";
    }
});
btt.addEventListener("click", function(e){
    e.preventDefault(); //링크 본연의 기능을 막아주는 역할
    scrollToTop()
});

function scrollToTop(){
    //일정 시간마다 할일 지정 let scrollInterval = setInterval(할일, 시간)
    //0.001s = 1
    //할일 =function(){실제로 할일}
    // 실제로 할일: 윈도우 스크롤이 0이 아닐때 
    // window.scrollBy(x,y)
    // window.scrollBy(0,-55)
    //스크롤이 0이면 setInterval를 멈추기 <-clearInterval(setInterval)
    let scrollInterval = setInterval(function(){
        if(scrollPos !=0){
            window.scrollBy(0,-55)
        }else{
            clearInterval(scrollInterval);
        }
    }, 20)
}
