// javascript를 html에 연결하는 법은 for_js.html을 참고.
'use strict';

console.log("Hello World")


// 1. 변수
// 먼저 변수를 선언하고 값을 집어 넣어야 함(초기화).
let globalName = '민혁'; //전역 변수 -> 계속 메모리에 남아있기 때문에 너무 남발하지 않는 것이 좋음.
{ //블럭으로 감싸면 그 안에서만 사용 가능.
    let name = '민혁'; //지역변수 정해진 공간, {} 안에서만 사용 가능.
    console.log(name);
    name = '정택'; //let으로 선언된 변수는 값을 변경할 수 있습니다.
    console.log(name);
    console.log("블럭 안: " + globalName);
}
console.log(name); //지역변수는 밖에서 사용 불가 (수행하면 에러가 남.)
console.log("블럭 밖: " + globalName);

let for = "111";
let break = "222";
let this = "333";
//위 3개 변수는 모두 선언, 초기화가 되지 않고 에러가 납니다.
//변수명이 키워드 또는 예약어이기 때문입니다. 키워드, 예약어는 javascript에서 특정 기능을 수행하도록 되어 있는 것을 의미합니다.
//javascript의 예약어 리스트 링크입니다. https://blog.sonim1.com/118


//var는 사용하지 마세요. 아래는 var를 사용하면 안되는 이유입니다.
console.log(age); //문제1. 변수를 선언하지 않아도 사용 가능
{
    age = 20;
    var age; //문제2. 초기화를 먼저하고 변수를 선언해도 정상적으로 사용가능.
}
console.log(age);//문제3. 지역변수임에도 밖에서 사용가능.
//사용하면 안되는 이유가 이해되지 않아도 괜찮습니다. 그냥 사용하지 않으시면 돼요!


const name = "민혁";
name = "정택"; //(수행하면 에러가 남.)
// const도 let처럼 변수를 선언하는 것이지만 조금 다름.
//변수 선언, 초기화 후에는 변경 불가
//일단 const를 사용할 것을 권장.
//이유1. 보안 상으로 안전함. 해커에 의해 강제로 값이 변경되지 않음.
//이유2. 인간의 실수를 막아줌. 자기도 모르게 값을 변경 해버릴 수도 있는데 그런 실수를 막아줌. 특히 협업 시.


//2. 자료형
//primitive 자료형: number, string, boolean, null, undefined
//object
//function js는 함수도 자료형 중 하나임. 즉, 변수에 할당이 가능.
//object, function은 다음주에 다룰게요.

const infinity = 1/0; //무한대
console.log(infinity);
const nan = 'not a number' / 2; //수가 아닐때
console.log(nan);

// 0, null, undefined, NaN은 조건문에 넣었을 때 false에 해당합니다.
// 그 외 다른 값은 true에 해당합니다.
// 예를 들어 if(0){} -> false라서 실행X. if("안녕"){} -> true라서 실행O.


//3. 연산자
// <, >, <=, >=, +, -, *, /, %, ++
//이 외에도 더 많음.
const value = 4 < 2;
console.log(value); //4 < 2는 거짓이므로 false가 출력됨.

// = == ===
const string = '5';
const number = 5;
console.log(string == number);
console.log(string === number);

//4. 조건문
const name2 = "민혁";
if (name2 === "민혁") {
    console.log("hi 민혁")
} else if (name2 === "정택") {
    console.log("hi 정택")
} else {
    console.log("누구세요?")
}
// else if는 사용하지 않아도, 여러번 사용해도 괜찮음.

const name3 = "민혁"
switch (name3) {
    case '민혁':
        console.log("front end");
        break;
    case '정택':
    case '나현':
        console.log("back end");
        break;
    default:
        console.log("누구세요?");
        break;
}
// 각 case별로 수행될 구문을 입력. break를 써야 해당되는 값을 찾았을 때 더 밑으로 내려가지 않음.
// 만약 "정택"과 "나현"이 같은 구문을 수행한다면 위처럼 break를 쓰지 않아도 됨.
// default는 꼭 지정해주세요.


//5. 반복문
let i = 0;
while (i < 3) {
    console.log("while: " + i);
    i++;
}

//for(시작값; 조건; 마지막에 수행할 것;) {}
for (let i = 0; i < 3; i++) {
    console.log("for: " + i);
}

//break 와 continue
i = 0;
while (i < 3) {
    console.log("while: " + i);
    i++;
    if (i === 2) {
        break;
    }
}

for (i= 0; i < 3; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log("for: " + i);
}
