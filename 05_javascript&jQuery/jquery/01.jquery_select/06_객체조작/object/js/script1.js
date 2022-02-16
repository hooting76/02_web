// var c= $('#changeThis').attr("src","./img/img2.gif");

$('.imgs img').hover(function(){
    $(this).attr("src","./img/img2.gif");
}, function(){
    $(this).attr("src","./img/img1.gif");
});

let srcVal = $('#sec_1 img').attr('src');
$('#sec_1 img').attr({src:srcVal.replace("1.png", "2.png"), alt:"바위"}).removeAttr("border");

$('#div1').addClass('box');
$('#div2').removeClass('box');
$('#div3').addClass('alert');
$('#div2').removeClass('alert');

$('.click').click(function(){
    $('#imgs img').toggleClass('red');
});

let pwidth = $('.p1').width(); //실제로 준 넓이값
console.log(pwidth);

let pinnerWidth = $('.p1').innerWidth(); //padding값을 포함
console.log(pinnerWidth);

let poutWidth = $('.p1').outerWidth(); //padding값+border 를 포함
console.log(poutWidth);

$('.p2').outerWidth(500).outerHeight(500); 

// position

let txt1=$('.txt_1 span');
let txt2=$('.txt_2 span');
let boxs=$('.boxs');

let off_t = boxs.offset().top;
let pos_t = boxs.position().top;

txt1.text(off_t);
txt2.text(pos_t);