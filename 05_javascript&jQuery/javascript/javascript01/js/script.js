document.write("안녕하세요.");

document.write('"놀자에요."');

// 변수


var name1 ;
console.log(name1);
// 위의 값은 undefined

name1 = "조창훈";
console.log(name1);
// 조창훈 으로 출력


let name2;
console.log(name2);
name2="누구세용";

console.log(name2);

// 변하지않는 값은 const를 사용한다.

// 변수예제
var box1;
box1 = 100;
box1 = 300;

document.write(box1);
// 300
document.write("<br/>");

var s="javascript";
var num="100";

document.write(s);
document.write("<br/>");s
document.write(num);
document.write("<br/>",typeof num);

var t=Number("100");
document.write("<br/>",typeof t);
// 넘버형

var a=true;
var b=10<=100; //false

document.write("<br/>", b);


