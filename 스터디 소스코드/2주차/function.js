//1-1. 함수 선언 (function declaration)
// 특정 동작, 기능을 수행하도록 하는 것
// 여러번 사용 가능
// 한가지 함수는 한 가지 동작만 하도록 구현할 것
// 함수의 이름은 동사로, 어떤 동작을 하는지 알 수 있도록 명확하게 짓기

/* 함수 선언하는 법
function 함수이름(parameter1, parameter2) {
    수행할 동작;
    return;
}
*/

function printHello() {     //parameter가 없는 함수
    console.log("Hello");
}
printHello(); //함수명() 으로 함수 실행 가능.

function print(message) {   //parameter가 있는 함수
    console.log(message);
}
print();

//1-2. Default parameter
function checkIn(when, who = "unknown") {
    console.log(`${who} checked in at ${when}`); //템플릿 문자열
}
checkIn(19, '민혁');
checkIn(20); //이렇게 parameter를 입력하지 않는 경우를 대비해 default prameter를 써줄 수 있음.

//1-3. Rest parameter
function printAll(...args) {    //parameter의 개수가 정해지지 않았을 때, parameter를 배열 형태로 받아올 수 있음.
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);   //배열에서 특정 위치의 값을 가져올땐 '배열이름[위치]'로 가져올 수 있음.
    };

    for (const arg of args) {   //위와 같은 동작을 하는 반복문. 배열 안 요소들에 하나씩 접근할 때 'of'를 사용할 수도 있음. 어려우면 그냥 위처럼 사용하자!
        console.log(arg);
    };
}
printAll('민혁', '정택', '나현'); //이렇게 여러 인자(parameter)를 입력할 수 있음.

//1-4. return
function add(num1, num2) {
    return num1 + num2;
    //이렇게 특정 값을 return 할 수 있다. return을 하면 함수가 종료됨.
    //위에 return이 없는 함수는 'return undefined;' 가 생략되어 있는 것. 기본적으로 모든 함수는 return을 함.
};
console.log(`20 + 30 = ${add(20, 30)}`);

//1-5. function expression
//첫 시간 js시간에 함수도 자료형이라고 했음.
//따라서 아래처럼 바로 변수에 넣을 수 있음.
const print2 = function() {
    console.log('Hi Hi');
};
print2();
const printAgain = print2; //다른 변수에 또 할당하면 해당변수로 함수 사용 가능.
//!!제가 스터디 때 실수 했는데 다른 변수에 할당할 때는 ()를 쓰시면 안돼요!!
printAgain();

//이렇게 변수에 할당하는 것과 위처럼 fuction으로 함수를 생성하는 것의 차이점 = 위처럼 선언(그냥 function 사용)하면 hoisting이 일어남.
//호이스팅이란 선언, 정의가 밑에서 되고 있는데도 그 위에서 해당 함수, 변수를 사용하는 경우
//코드에 에러를 일으키기 쉬우므로 사용하지 말자!!
//앞으로는 변수를 생성해서 함수를 넣는 식으로 함수를 선언할 것!

//1-6. 화살표 함수
// const sample = function() {
//     console.log('this is sample')
// };

// 위 함수를 화살표 함수로 만들면 아래와 같음.
const sample = () => console.log('this is sample'); //이렇게 function이라는 키워드를 빼고 =>를 이용해서 함수를 간단히 선언할 수 있음.
const addSample = (a, b) => {
    //~~~do something~~~
    return a + b;
} //실행하는 문장이 2줄 이상일 때는 {}와 retrun을 써야함.
//1줄일 때는 {}와 return 생략가능. 

// 1-7. IIFE 즉시 실행 함수
(function iife() {
    console.log('IIFE');
})();
//이렇게 하면 따로 함수를 사용하지 않아도 함수가 정의 되고 바로 실행됨.
