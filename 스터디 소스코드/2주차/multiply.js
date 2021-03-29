//간단한 설명
// const first = document.querySelector('#first').value //input에 있는 값을 가져올 때는 .value로 가져옴.
// const second = document.querySelector('#second').value //"."은 "~의" 라는 의미라고 생각하면 됨.
// const result = document.querySelector('#result').textContent //input이 아닌 다른 태그의 값은 textContent로 가져옴.

document.querySelector('#click').addEventListener('click', () => {
    const first = document.querySelector('#first').value
    const second = document.querySelector('#second').value

    if(first) {
        const result = document.querySelector('#result')
        //변수는 사용할 곳과 가까이 . 하지만 여러분이 초보라면 너무 의식하지 마세요! 그냥 맨 위에 선언해도 괜찮습니다!!
        if(second) {
            const time = first * second;
            result.textContent = time
        } else {
            result.textContent = "두번째 값을 입력하세요!"
        }
    } else {
        document.querySelector('#result').textContent = "첫번째 값을 입력하세요!"
    }
});
