const moreBtn = document.querySelector('.info .moreBtn');
// const는 변하지않는 변수를저장할때 사용.
// var은 변함.
const title = document.querySelector('.info .metadata .title');

moreBtn.addEventListener('click' , ()=>{
    title.classList.toggle('addclick');
    moreBtn.classList.toggle('clicked');
});