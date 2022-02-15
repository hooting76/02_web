
// -------------------78p--------------------------

// for(초깃값, 조건식, 증감식){
//     자바스크립트 코드;
// }

// for( var i=0; i<=10; i++){
//     document.write(`반복 ${i} <br>`);
// }
// ------------------------79p------------------------
// for(let idx=1; idx<=100; idx++){
//     if(idx%5==0 && idx%7==!0){
//         document.write(`<p class = "red">${idx}</p>`);
//     }else if(idx%5==0 && idx%7 ==0){
//         document.write(`<p class = "green">${idx}</p>`);
//     }else if(idx%5!=0 && idx%7 ==0){
//         document.write(`<p class = "aqua">${idx}</p>`);
//     }
// }
// 번외 예제1
// for(let i =6; i>0; i--){
//     document.write(`<h${i}> h${i}재미있는 자바스크립트<h${i}>`);
// }
// 번외 예제2 구구단

// for(let i2=2; i2<=9; i2++){
//     document.write(`<h1>${i2} 단</h1>`);
//     for(let i3 =1; i3<=9; i3++){
//         document.write(`${i2} x ${i3} = ${i2 * i3} <br>` );
//     }
// }

// --------------------80p-----------------------------
// break예제: 반복문중 특정 조건이 충족되는 break문을 만들어서 조건충족시 break문으로 인해 반복문을 종료한다.
// for(var  i =1; i<=10; i++){
//     if(i==6) break;
//     document.write(`${i} <br>`);
// }
// document.write(`==============end==============`);

// ----------------------81p----------------------------
// continue문: 특정 조건을 건너뛰고 진행하는 문법
for(var i=1; i<=10;i++){
    if(1%2 ==0) continue;
    document.write(i,"<br>");
}
