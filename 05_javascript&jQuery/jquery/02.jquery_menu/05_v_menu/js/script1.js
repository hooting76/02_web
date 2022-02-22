$('.sub').hide();

// $('.title').click(function(e){
//     e.preventDefault();
//     let th = $(this).next();
//     if(th.is(':visible')){
//         th.slideUp();
//     }else{
//         th.slideDown();
//     }
// });

let a=true;
$('.title').click(function(){
    if(a==true){
        $(this).next('.sub').slideDown();
        a=false;
    }else{
        $(this).next('.sub').slideUp();
        a=true;
    }
});