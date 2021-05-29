//map()
//배열의 모든 요소에 대해 어떤 동작을 수행하는 함수.
//참고로 map은 원본 데이터는 변경하지 않고 수정된 새로운 배열을 만들어 낸다.(return 한다)

const array = [40, 50, 60, 70, 80];
const array2 = array.map((number) => number * 2 )

const array3 = [
    {
        id: 1,
        title: "제목",
        contents: "내용내용"
    },
    {
        id: 2,
        title: "제목2",
        contents: "내용내용2"
    },
    {
        id: 3,
        title: "제목3",
        contents: "내용내용3"
    }
]

array3.map((key) => {
    console.log(key.id);
    console.log(key.title);
    console.log(key.contents);
})

console.log(array);     //결과: [40, 50, 60, 70, 80]
console.log(array2);    //결과: [80, 100, 120, 140, 160]



//split()
//문자열을 특정 기준으로 잘라서 배열에 담음.
const fruits = "사과, 바나나, 딸기, 오렌지";
const result = fruits.split(",");
console.log(result);    //결과: ["사과, " 바나나", " 딸기", " 오렌지"]
