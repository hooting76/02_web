document.addEventListener('DOMContentLoaded',function(){
    const $sliderwrap = document.querySelector('.container');
    const $sliderContainer = document.querySelector('.slider-container');
    const $slide = document.querySelectorAll('.slide');
    const $prev = document.getElementById('prev');
    const $next = document.getElementById('next');
    const $pager = document.querySelector('.pager');
    const $pagerBtn = document.querySelectorAll('.pager span');

    let $slideHeight = 0; //슬라이드의 가장 높은 값을 가져오기 위한 변수명
    let $slideCount = $slide.length;
    let $correntIndex = 0;
    let $timer;

    for(let i=0; i<$slideCount; i++){
        if($slideHeight < $slide[i].offsetHeight){
            $slideHeight = $slide[i].offsetHeight;
        }
    }
    console.log($slideHeight);
    $sliderwrap.style.height = $slideHeight + 'px';
    $sliderContainer.style.height = $slideHeight + 'px';

    for(let j=0; j<$slideCount; j++){
        $slide[j].style.left = j*100 +'%';

    }

    //슬라이드 이동 함수
    
    function goToSlider(idx){
        $sliderContainer.classList.add('animated');
        $sliderContainer.style.left= -100*idx + '%';
        $correntIndex = idx;
        for(let k=0; k<$slideCount; k++){
            $pagerBtn[k].classList.remove('active');
        }
        $pagerBtn[idx].classList.add('active');
    }
    goToSlider(0);

    // 양쪽버튼 클릭시 이동
    $prev.addEventListener('click', function(){
        // goToSlider($correntIndex-1);
        if($correntIndex==0){
            goToSlider($slideCount-1);
        }else{
            goToSlider($correntIndex-1);
        }
    });
    $next.addEventListener('click', function(){
        // goToSlider($correntIndex+1);
        if($correntIndex==$slideCount-1){
            goToSlider(0);
        }else{
            goToSlider($correntIndex+1);
        }
    });

    // 자동슬라이더
    function autoSlide(){
        $timer = setInterval(function(){
            let nextIdx = ($correntIndex+1) % $slideCount;
            goToSlider(nextIdx);
        },3000);
    };
    autoSlide();

    // 호버시 슬라이드 멈추고 언호버시 슬라이드 재생
    $sliderwrap.addEventListener('mouseenter', function(){
        clearInterval($timer);
    });
    $sliderwrap.addEventListener('mouseleave', function(){
        autoSlide();
    });

    // 슬라이드 하단 단추 눌러서 이동하기(pager)
    for(let x=0; x<$pagerBtn.length; x++){
        $pagerBtn[x].addEventListener('click', function(event){
            // console.log(event.target);
            let $pageNum = event.target.innerText-1;
            // console.log($pageNum);
            goToSlider($pageNum);
        });
    }
});