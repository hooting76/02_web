$(".bar").draggable({containment: "parent",axis:"x"});
$(".bar").on('drag', function(){
    getPos();
});

let min=0;
let max=-600;
function getPos(){
    let barLeft=$('.bar').css('left');
    // console.log(barLeft);
    barLeft= parseInt(barLeft);//정수로 만들어

    let pos = (barLeft*(max))/570;
    $('#content').css({left:pos});
}