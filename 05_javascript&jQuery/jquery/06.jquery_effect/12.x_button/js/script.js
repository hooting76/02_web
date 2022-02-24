// $('.ani_Box').hover(function(){
//     $(this).addClass('act');
// },function(){
//     $(this).removeClass('act');
// });

$('.ani_Box').click(function(){
    // 없을때 있게 하고 있을때 없게 하는게 toggleClass이다.
    $(this).toggleClass('act');
});

// let a=true;
// $('.ani_Box').click(function(){

//     if(a==true){
//         $(this).addClass('act');
//         a=false;
//     }else{
//         $(this).removeClass('act');
//         a=true;
//     }
// });

