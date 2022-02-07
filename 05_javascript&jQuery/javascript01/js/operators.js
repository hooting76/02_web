//1.산술연산자(numberic operators)
// console.log(1+1); //add
// console.log(10-1); //substract
// console.log(5*3); //multiply
// console.log(6/5); //나누기: 몫을 가져옴 divide
// console.log(5%2); //나누기: 나눈 나머지를 가져옴 remainder
// console.log(2**3); //2의 3승 값을 의미.


//2. 문자결합연산자(string concatenation)
// console.log('my ' + "jch"); // my jch
// console.log('my ' + 2) // my 2 -> 문자와 숫자가 결합되면 하나의 문자로 인지한다. 
// console.log(`string literals : 1+2=${1+2}`) //키보드 상단왼쪽 1번 옆의 ` 를 입력하여 사용.

// let num = 5+8+9;
// console.log(num); //22
// console.log(`내가 원하는 답은 ${num} 
// 입니다.`); //내가 원하는 답은 22 입니다. + 여기에서는 enter키를 자동으로 만들어준다.
// console.log("내가 원하는 답은 "+ num +
// " \n 입니다."); //내가 원하는 답은 22 입니다. <- 여기에서는 줄바꿈을 위해서 ""안에 \n를 사용해줘야된다.


//3. 대입 연산자(Assigment operators)
// let x=3;
// let y=6;

// x+=y;// 3+6
// console.log(x); //9  

// x-=y; //9-6
// console.log(x); //3

// x*=y; // 3*6
// console.log(x); //18

// x/=y; // 18/6
// console.log(x); //3


//4. 증감 연산자 (increment and decrement operators)

// let counter=2;
// const preIncremnet=++counter; //pre는 전처리를 뜻함. <-뭔가 하기전에 이루어져야댐. ++변수 는 숫자를 먼저 증가시키는것을 뜻함.
// console.log(counter); //3

// const postIncremnet = counter++; //post는 후처리를 뜻함. <- 작업을 이루고 나서 증감시키는 형태.
// console.log(`postIncremnet: ${postIncremnet}, counter: ${counter}`) // 3  4 <-postIncremnet는 그대로 3으로 나오고, counter는 후처리 후 4가 되어서 나온다.

//5. 비교연산자 (Comparison operators)
// console.log(10<6); //false 
// console.log(10<=6); //false
// console.log(10>6);  //true
// console.log(10>=6); //ture

// let k=10, m="10";

// console.log(k == 10); //true
// console.log(m == 10); //true
// console.log(k === 10); //true -> 데이터형 까지 확인할때 =을 3개 사용한다. 
// console.log(m === 10); //false 여기서 m은 문자형태의 "10" 이고 10이랑은 데이터형이 달라서 false가 뜬다.


//6. 논리연산자(logical operators)
// const value1=false;
// const value2=4<2;

// or operators ||<- or를 의미
// console.log(`or:${value1 || value2 || check()}`); //1은 false, 2는 false, 3은 리턴값이 true 이므로 false or false or true 식이 되므로, true가 출력이 된다. 
// 이 식의 경우는 간단한 식 부터 앞에 먼저 사용한다. or 연산자의 경우 앞의값이 true이면 그곳에서 바로 식이 종료된다. 

// function check(){
//     for(let i=0; i<10; i++){
//         console.log("호옹이....");
//     }
//     return true;
// }

//and operators && <- and를 의미
// 아래 연산자도 위와 동일하게 앞의 변수에서 false가 감지되면 바로 식이 종료 된다.
// console.log(`and: ${value1 && value2}`); //false 
console.log(0==false); //true 
console.log(0===false); //false 0은 숫자 false은 boolean이라 false가 나온다.

console.log(''==false); // ''같은 공백은 false 이므로 true가 나온다.
console.log(''===false); // 하지만 타입이 다르므로 이 식은 false가 나온다.

console.log(null==undefined); //true
console.log(null===undefined); //false <- null은 값이 없는 상태, undefined는 형태가 지정되지않다 라는 뜻.


