// 'use strict';

// Variable - 변경될수 있는 값(read &write 가능)
//var (let const)<- 대세(es6) -사용을 위해서는 바벨이라는 것이 필요하다. 지원하지않는 브라우저에 맞게 랜더링 해줘야함.
//var <-es5버전(사용을 잘 안함) 

// 1. 호이스팅 -어디에 선언했는지 상관없이 맨 상단으로 끌어올려 나타냄
// 원래는 대부분의 프로그램 언어에서 는 변수를 선언하고 그 값을 할당하는게 정상. 

let Name ='나야나';
console.log(Name);
// let은 한번 변수 선언하면 끝.
Name = '너야너?'
console.log(Name);

let globalName='global name';//전역변수
// 전역변수는 문서 전체에 적용
// 지역변수는 그 함수(지역) 안에서만 유효

// 블록스코프
{ //지역변수
    let name5='훈쓰';
    console.log(name5);
    name5 = '쓰훈';
    console.log(name5);
    console.log(globalName);
}
// 위 중괄호 안에서의 let 대신에 var를 쓰면 스코프를 무시하고 값이 나옴.(철저히 무시하며 어디서든 값을 가져오므로 데이터가 원치않게 혼합될수있음.)
// console.log(name5);

// 2. const - r(only read) 읽기만 가능 한번 할당하면 변하지 않는 값.(불변값)
const dayInWeek=7;

// 3. variable types
// primitive(더이상 나눠질수 없는 타입)- string(문자열) / number(숫자형) / boolean(불린) / null / undefined / symbol
// object(객체)
// function(함수)

const count = 20; //정수
const size = 14.3; //실수

// 백킹방법
console.log(`value: ${count}, type:${typeof count}`);
// 템프럴 리터럴방법
console.log("value: " + count + ", type:" + typeof count);


// 4. string문자와 변수를 연결
const char = 'c';
const jch = 'jch';
const greeting = 'hello ' + jch;

console.log(greeting);
console.log(`value: ${greeting}, type:${typeof greeting}`);

const hellojch = `hi ${jch}!`;
console.log(hellojch);

// 5. number
const infinity = 1/0;
console.log(infinity);

// 숫자가 아님을 나타냄
// const NaN = 'not a number'/2;
// console.log(NaN);

// 6. boolean(참, 거짓 판별)
// false : 0, null, undefined, NaN, '' 
// true: 1,  내용이나 값이 있는 것 등을 얘기함.

const canRead = true;
const test= 3<1; //false

console.log(`value: ${canRead}, type:${typeof canRead}`);
console.log(`value: ${test}, type:${typeof test}`);

// 7.  null 아무것도 아닐때 내가 비워 놓고자 할때 사용
let nothing=null;
console.log(`value: ${nothing}, type:${typeof nothing}`);

// 8. undefined - 변수명을 주고 값을 지정해 주지 않았을때
let x;
console.log(x);