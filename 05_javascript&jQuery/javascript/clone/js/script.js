let slides = document.querySelector('.slides'),
slide = document.querySelectorAll('.slides li'),
slideCount = slide.length,
slideWidth = 200,
slideMargin = 30,
prevBtn=document.querySelector('.prev'),
nextBtn=document.querySelector('.next'),
currentIdx = 0;

// console.log(slideWidth);

function makeClone(){
    for(var i=0; i<slideCount; i++){
        let cloneSlide= slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');

        slides.appendChild(cloneSlide);
    }
}
makeClone();