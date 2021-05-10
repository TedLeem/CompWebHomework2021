/* 1. object 기본 */
// object = {key: value} 형태의 구조.

const name = "김민혁";
const age = 23;
//그 동안은 이렇게 변수를 선언했지만 변수끼리 서로 연관있는 경우, 연관성을 파악하기 어려움.

//위와 같은 문제를 해결하기 위해 object라는 것을 사용
const kmh = {name: "김민혁", age: 23}      //생성법1

const ljt = new Object();                  //생성법2. 이건 class를 알아야 하는데 우리는 사용하지 않겠습니다. 다음 기회에...
ljt["name"] = "임정택"; //key는 항상 String 타입
ljt["age"] = 22;

console.log(kmh.name);
console.log(kmh.age);
console.log(kmh);

console.log(ljt.name);
console.log(ljt.age);
console.log(ljt);

kmh.major = "SW";   //이런 방식으로 추가할 수도 있지만, 추천하지 않는 방식.
console.log(kmh.major);

// kmh.name === kmh['name'] 이렇게도 불러올 수 있음.
// 보통은 .을 사용함. []는 우리가 어떤 키의 값을 가져와야 할지 모를 때만 사용. 아래 예 참고.
function printValue(object, key) {
    // console.log(object.key); //이건 안됨. 함수에 입력된 object에서 진짜 "key" 라는 키를 찾기 때문.
    console.log(object[key]);   //이렇게 어떤 키를 사용할지 모를 때 사용.
}
printValue(kmh, "name");

/* 2. in 연산자 */
for (key in kmh) {
    console.log(key);
}

/* 3. object의 복사 */
//object는 참조 변수이다.
const kmh1 = kmh                    //참조 변수는 이런 식으로 복사하면 안됨.

const kmh2 = {};
Object.assign(kmh2, kmh);           //앞에 복사할 object, 뒤에 복사될 object
console.log(kmh2);

const kmh3 = {};
Object.assign(kmh3, kmh1, kmh2)     //이렇게 여러 object를 복사할 수도 있음. 여러 object에 있는 키-값들이 모두 복사됨.
                                    //하지만 kmh1과 kmh2가 서로 같은 key를 갖는다면 뒤에 있는 object의 값이 저장됨(덮어씀)

/* 4. JSON (Javascript object Notation)*/
//웹 브라우저에서 클라이언트와 서버가 데이터를 주고 받을 때 데이터의 형식은 여러가지가 있음.
//그 중에서 요즘 가장 많이 사용하는 데이터 형식이 JSON
//장점: 1. 가독성이 좋음. 2. 가벼움. 3. 프로그래밍 언어와 관계없이 사용가능. 4. 모바일, 웹 모두 사용가능

//3번 장점의 이유는 javascript의 object를 String 타입의 형태로 변경에서 주고 받는데, (중요!)
//대부분의 프로그램 언어에서 String 타입의 JSON을 인식, 사용할 수 있는 방법을 갖추고 있음.

//Javascript object니까 당연히 key-value로 구성됨.

/* 4-1. Object -> JSON
        stringify(object) */
let json = JSON.stringify(['apple', "banana"]);     //큰 따옴표, 작은 따옴표 상관X
console.log(json);

let dog = {
    name: '꿍이',
    color: 'brown',
    size: null,
    birthDate: new Date("2010-03-04"),
    bark: () => {
        console.log(`${dog.name}: 멍멍`);
    }
}

json = JSON.stringify(dog);
console.log(json);                                  //콘솔을 찍어보면 함수는 나오지 않음.

json = JSON.stringify(dog, ['name', 'color'], 4);      //이렇게 원하는 키만 갖는 json을 만들 수도 있음.
console.log(json);

json = JSON.stringify(dog, (key, value) => {        //이렇게 함수를 이용해서 더 구체적이고 섬세하게 컨트롤할 수도 있음.
    console.log(`key: ${key}, value: ${value}`);
    return key === "name" ? '푸앙이' : value;       //이건 삼항 연산자. 맨앞의 조건이 맞으면 두번째가 실행, 조건이 틀리면 세번째가 실행.
})
console.log(json);


/* 4-2. JSON -> Object
        parse(json) */

json = JSON.stringify(dog);
const object = JSON.parse(json);
console.log(object);

dog.bark();
object.bark();      //(에러) 이렇게 JSON에서 object로 변환된 object에는 함수 없음.
