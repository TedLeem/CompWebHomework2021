//const myName = "김민혁"
//console.log(myName[1]) //이렇게 문자열에 [위치] 를 붙이면 해당 위치의 문자열만 뽑을 수 있음.

document.querySelector('#button').addEventListener('click', () => {
    const wordTag = document.querySelector('#word')
    const inputTag = document.querySelector('#input')
    const errorTag = document.querySelector('#error')

    const word = wordTag.textContent //wordTag로 수정 가능
    const input = inputTag.value //inputTag로 수정 가능

    const last = word[word.length - 1] //.length는 문자열의 문자 수나 배열 속 요소의 수를 알려줌.
    const first = input[0]

    if(last === first) {
        //여기도 위에 ~Tag로 중복 제거 가능
        wordTag.textContent = input //정답일 경우, 상단의 단어를 입력된 값으로 바꾸는 것.
        errorTag.textContent = '' //정답일 경우, 이전에 "땡!!"이 출력되어 있다면 제거하는 것.
        inputTag.value = '' //답을 입력한 후에 input창을 비워주는 것.
        inputTag.focus()  //답을 입력한 후에도 input창에 커서가 들어가도록 하는 것.
    } else {
        errorTag.textContent = "땡!!" //오답일 경우, "땡!!"을 출력하는 것.
        inputTag.value = ''
        inputTag.focus()
    }
});
