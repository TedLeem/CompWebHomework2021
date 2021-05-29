//url로부터 어떤 게시글에 대한 요청인지를 알기위해 게시글 id를 parsing하는 동작 (detail.js 것과 동일)
const path = window.location.pathname;
const split = path.split("/");
const id = split[split.length - 1];

//update 수행 시 실행시킬 함수. 게시글의 데이터(제목, 내용 등)을 불러와서 입력 창에 넣어주는 함수
async function getPostDetail() {
    try {
        const response = await axios.get(`/detail-data/${id}`);  //특정 게시글의 상세 데이터 요청
        console.log(response);
        console.log(response.data);
        console.log(response.data[0]);
        //받아온 데이터를 콘솔에 여러 방식으로 찍어보자~!

        const post = response.data[0];  //특정 게시글의 데이터를 변수에 저장.
        
        const title = document.querySelector("#input_title");
        const contents = document.querySelector("#input_contents");
        
        title.value = post.title;
        contents.value = post.contents;
        //위 과정은 한 게시글의 정보를 가져와서 글쓰기 페이지에 넣는 과정임.

    } catch(err) {
        console.log(err);
    }
}


if (id !== "post") {    //post요청이 아닌 경우. 즉, 수정update 요청인 경우 아래 동작 수행.
    getPostDetail();    //위에 만든 함수를 실행.
    document.getElementById('form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = e.target.input_title.value;
        const contents = e.target.input_contents.value;
        if (!title || !contents) {
            return alert("제목과 내용을 모두 입력하세요!");
        } else {
            try {
                await axios.put(`/update/${id}`, {title, contents});    //저번 주에 했던 것과 거의 동일하지만 이번엔 post 요청이 아닌 수정 요청을 한다!
            } catch (err) {
                console.log(err);
            }
            location.href = '/';    //(추가!) 작성 후 메인 페이지로 이동
        }
    })
} else {                //여기는 post 요청이므로 저번 주에 했던 거 똑같이!
    document.getElementById('form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = e.target.input_title.value;
        const contents = e.target.input_contents.value;
        if (!title || !contents) {
            alert("제목과 내용을 모두 입력하세요!");
        } else {
            try {
                await axios.post('/post', {title, contents});
            } catch (err) {
                console.log(err);
            }
            location.href = '/';    //(추가!) 작성 후 메인 페이지로 이동
        }
    })
}



//저번 주에 한 내용(글 작성만 하는 부분)
// document.getElementById('form').addEventListener('submit', async (e) => {
//     e.preventDefault();             //submit 동작은 수행하면 창이 새로고침된다. preventDefault로 이런 동작을 막아줄 수 있다. 원한다면 사용
//     const title = e.target.input_title.value;
//     const contents = e.target.input_contents.value;
//     if (!title || !contents) {      //제목, 내용이 모두 입력됐는지 체크
//         alert("제목과 내용을 모두 입력하세요!");
//     } else {
//         try {
//             await axios.post('/post', {title, contents});   //post는 데이터를 보낼때 사용. 따라서 get과 달리 보낼 데이터를 주소 뒤에 넣어줘야 함.
//         } catch (err) {
//             console.log(err);
//         }
//     }
// })
